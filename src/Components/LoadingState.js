const LoadingSection = () => {
    return (
        <div className="w-full">
            <div class="bg-gray-200 w-80 m-8 animate-pulse h-14 rounded-2xl" ></div>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
            </div>
        </div>
    );
}
const LoadingCard = () => {
    return (<div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
            <div class="bg-gray-200 h-48 animate-pulse object-cover rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="card-title bg-gray-200 h-8 w-2/3 animate-pulse" />
            <div class="badge h-8 w-2/3 animate-pulse badge-primary mx-auto mb-4" />

            <h3 className="font-medium bg-gray-200 h-8 w-2/3 animate-pulse" />
            <div className="flex justify-around ">
                <div className="flex items-center px-4">
                    <div class="mask bg-gray-200 h-8 w-2/3 animate-pulse mask-circle" />
                    <div className=" pl-2 w-32 truncate bg-gray-200 h-8 animate-pulse" />
                </div>
            </div>
            <div class="justify-center card-actions">
                <div class="btn btn-outline  h-8 w-2/3 animate-pulse btn-accent" />
            </div>
        </div>
    </div>);
}
export default LoadingSection