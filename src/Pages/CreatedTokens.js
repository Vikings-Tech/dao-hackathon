import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useEffect, useState } from "react";
import { getContractAddress, getToken, tokensFromContractAddress } from "config/axios";
import TokenCard from "Components/TokenCard";
import ContractSection from "Components/ContractSection";
import LoadingSection from "Components/LoadingState";
import CreatedCard from "Components/CreatedCard";
const HomePage = () => {
    const { account } = useEthers();
    const [fetching, setFetching] = useState(true);
    const [createdStuff, setCreatedStuff] = useState([])
    useEffect(() => {
        const fetchContractAddress = async () => {
            setCreatedStuff((await getToken(account)).data);
            setFetching(false);


        }
        if (account) {
            setFetching(true);
            fetchContractAddress();

        }
    }, [account])

    if (!account) {

        return (<div className="text-center mx-auto font-semibold mt-8 text-3xl">Please connect to a wallet First!</div>
        )
    }
    if (fetching) {
        return (<LoadingSection />);
    }
    return (<div className="container px-8 mx-auto">
        <div className="text-center mx-auto font-semibold my-8 text-3xl">Links you have created</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {createdStuff.length > 0 ? createdStuff.map(e => {
                return (<CreatedCard {...e} />)
            }) : "No content created yet!"}
        </div>
    </div>);
}
export default HomePage