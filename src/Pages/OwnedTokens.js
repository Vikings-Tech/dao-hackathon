import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useEffect, useState } from "react";
import { getContractAddress, getToken, tokensFromContractAddress } from "config/axios";
import TokenCard from "Components/TokenCard";
import ContractSection from "Components/ContractSection";
import LoadingSection from "Components/LoadingState";
const HomePage = () => {
    const { account } = useEthers();
    const [fetching, setFetching] = useState(true);
    const [contractAddresses, setContractAddresses] = useState([]);
    const [tokenFromContractAddress, setTokenFromContractAddress] = useState([]);

    useEffect(() => {
        const fetchContractAddress = async () => {
            const result = await getContractAddress(account);
            setContractAddresses(result.data.data.items);

        }
        if (account) {
            fetchContractAddress();

        }
    }, [account])
    useEffect(() => {
        const populateContractTokens = async () => {
            let result = contractAddresses.map(async (item) => {
                const res = await tokensFromContractAddress(item.contract_address);
                const object = { contract: item, tokens: res?.data?.result }
                return object;
            })
            result = await Promise.all(result);
            setTokenFromContractAddress(result);
            setFetching(false);
        }
        populateContractTokens();
    }, [contractAddresses])
    if (!account) {

        return (<div className="text-center mx-auto font-semibold mt-8 text-3xl">Please connect to a wallet First!</div>
        )
    }
    console.log(fetching);
    if (fetching) {
        return (<LoadingSection />);
    }
    return (<div className="container px-8 mx-auto">
        <div className="text-center mx-auto font-medium mt-8 text-3xl">Links you have access to</div>

        {tokenFromContractAddress.filter(e => e?.tokens?.length > 0).map(e => {
            return (<ContractSection {...e} />)
        })}
    </div>);
}
export default HomePage