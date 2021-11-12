const TokenCard = ({ banner, photo, url, dname, title, descr, kind }) => {
    return (<div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
            <img src={banner} class=" h-48 object-cover rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <div class="badge badge-primary mx-auto mb-4">{kind}</div>

            <h3 className="font-medium">By:</h3>
            <div className="flex justify-around ">
                <div className="flex items-center px-4">
                    <img src={photo} class="mask h-8 mask-circle" />
                    <div className=" pl-2 w-32 truncate">{dname}</div>
                </div>
            </div>

            <p>{descr}</p>
            <div class="justify-center card-actions">
                <a href={url} target="_blank" class="btn btn-outline btn-accent">View Content</a>
            </div>
        </div>
    </div>);
}
export default TokenCard;