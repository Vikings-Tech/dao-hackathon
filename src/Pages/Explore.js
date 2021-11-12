import ExploreCard from "Components/ExploreCard";

const { default: CreatedCard } = require("Components/CreatedCard");
const { default: LoadingSection } = require("Components/LoadingState");
const { getExplorePage } = require("config/axios");
const { useEffect, useState } = require("react");

const Explore = () => {
    const [exploreResults, setExploreResults] = useState([]);
    useEffect(() => {
        const fetchExplorePage = async () => {
            setExploreResults((await getExplorePage())?.data?.result);
        }
        fetchExplorePage();
    }, [])
    if (exploreResults.length <= 0) {
        return (<LoadingSection />)
    }
    return (<div className="container px-8 mx-auto">
        <div className="text-center mx-auto font-semibold my-8 text-3xl">Most Recent Token Gated Links:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {exploreResults.map(e => {
                return (<ExploreCard {...e} />)
            })}
        </div>
    </div >);
}
export default Explore;