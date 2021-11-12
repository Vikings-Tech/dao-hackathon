const { default: TokenCard } = require("./TokenCard");

const ContractSection = ({ contract, tokens }) => {
    const { logo_url, contract_name } = contract;
    return (<>
        <div>
            <div className="flex items-center  my-12">
                <img src={logo_url} class="mask h-12 mask-circle" />
                <div className="ml-4 font-semibold text-2xl">{contract_name}</div>
            </div>
            <div>
                {tokens?.length > 0 ? <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{
                    tokens.map((e) => {
                        return (<TokenCard {...e} />);
                    })
                }</div> : "No Content Available"}
            </div>
        </div>
    </>)
}
export default ContractSection;