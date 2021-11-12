const axios = require("axios");
const mintgateInstance = axios.create({
    baseURL: "https://mgate.io/api/v2",
});
const covalentInstance = axios.create({
    baseURL: "https://api.covalenthq.com/v1/1"
});
export const mintgateHeader = () => {
    return {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "content-type": "application/json",
        },
    };
};
const getMultipartHeader = () => {
    return {
        headers: {
            pinata_api_key: process.env.REACT_APP_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_API_SECRET, "content-type": "multipart/form-data",
        },
    };
};
export const getToken = async (wallet) => {
    const url = `/tokens/byuser?wallet=${wallet}`;
    return (await mintgateInstance.get(url));
}
export const getContractAddress = async (wallet) => {
    const url = `/address/${wallet}/balances_v2/?nft=true&key=${process.env.REACT_APP_COVALENT_API_KEY}`;
    const res = await covalentInstance.get(url);
    return res;
}
export const tokensFromContractAddress = async (contractAddress) => {
    const url = `/links/token/?tokenAddress=${contractAddress}`;
    const res = await mintgateInstance.get(url);
    return res;
}
export const getExplorePage = async () => {
    const url = `/links/feed`;
    const res = await mintgateInstance.get(url);
    console.log(res)
    return res;
}