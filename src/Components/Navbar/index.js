import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useEffect, useState } from "react";
import { getContractAddress, getToken, tokensFromContractAddress } from "config/axios";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const { activateBrowserWallet, account } = useEthers();
    const [contractAddresses, setContractAddresses] = useState([]);
    const [tokenFromContractAddress, setTokenFromContractAddress] = useState([]);
    const handleConnectWallet = () => {
        activateBrowserWallet();
    }
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
            const result = contractAddresses.map(async (item) => {
                const res = await tokensFromContractAddress(item.contract_address);
                return res;
            })
            setTokenFromContractAddress(result);
        }
        populateContractTokens();
    }, [contractAddresses])
    const etherBalance = useEtherBalance(account);
    return (<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
        <div class="px-2 mx-2 navbar-start">
            <span class="text-lg font-bold">
                Mintgate Tokens
            </span>
        </div>
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
            <div class="flex items-stretch">
                <Link to="/explore" class={`btn btn-ghost btn-sm ${location.pathname.includes("explore") ? "underline" : ""} rounded-btn`}>
                    Explore
                </Link>
                <Link to="/createdByMe" class={`btn btn-ghost btn-sm ${location.pathname.includes("createdByMe") ? "underline" : ""} rounded-btn`}>
                    Links Created by Me
                </Link>
                <Link to="/ownedByMe" class={`btn btn-ghost btn-sm ${location.pathname.includes("ownedByMe") ? "underline" : ""} rounded-btn`}>
                    Accessible Links

                </Link>

            </div>
        </div>
        <div class="navbar-end">
            <button
                onClick={handleConnectWallet}
                class="btn w-52 px-4  btn-primary">
                <div className="truncate"> {account ? JSON.stringify(account) : "Connect to a wallet"}</div>
            </button>

        </div>
    </div>);
}
export default Navbar;