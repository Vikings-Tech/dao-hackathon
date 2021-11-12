const ExploreCard = ({ img, page, dname, name, price, title, photo, total, descr }) => {
    return (<div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
            <img src={img} class=" h-48 object-cover rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{title}</h2>

            <h3 className="font-medium">By:</h3>
            <div className="flex justify-around ">
                <div className="flex items-center px-4">
                    <img src={photo} class="mask h-8 mask-circle" />
                    <div className=" pl-2 w-32 truncate">{dname}</div>
                </div>
            </div>


            <p className="h-32 overflow-hidden">{descr}</p>

        </div>
    </div>);
}
export default ExploreCard;