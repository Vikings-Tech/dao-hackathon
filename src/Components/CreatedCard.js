const CreatedCard = ({ img, page, dname, name, price, total, description }) => {
    return (<div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
            <img src={img} class=" h-48 object-cover rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{name}</h2>

            <div className="flex justify-around ">
                <div className="flex items-center px-4">
                    <h3 className="font-medium">Price:</h3>
                    <div className=" pl-2 w-32 truncate">{price}</div>
                </div>
            </div>
            <div className="flex justify-around ">
                <div className="flex items-center px-4">
                    <h3 className="font-medium">Quantity:</h3>
                    <div className=" pl-2 w-32 truncate">{total}</div>
                </div>
            </div>

            <p>{description}</p>
            <div class="justify-center card-actions">
                <a href={page} target="_blank" class="btn btn-outline btn-accent">View on mintgate</a>
            </div>
        </div>
    </div>);
}
export default CreatedCard;