import { data } from "autoprefixer";

const TextMoviewDetail =() => {
    // console.log("data3",data3)
    return (
        <div className="main ml-6 flex flex-col gap-12">
            <div className="text1 flex flex-col gap-1">
                <div className="directorName text-xl text-white">
                    {/* <h2>director</h2> */}
                    {/* <h2>{data.payload.director}</h2> */}
                </div>
                <div className="runtime text-sm text-yellow-50">
                    <p>runtime </p>
                    {/* <p>{data.payload.runtime} </p> */}
                </div>
                <div className="type text-yellow-50">
                    <p>type</p>
                    {/* <p>{data.payload.genre}</p> */}
                </div>
                <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
            </div>
            <div className="text2 flex flex-col gap-1">
                <div className="title text-xl text-white">
                    {/* {data.payload.movie_title} */}fsfdsfsf
                </div>
                <div className="description text-yellow-50">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nesciunt ipsam voluptatibus optio aspernatur necessitatibus et provident doloribus atque totam ipsum eaque animi hic saepe voluptatum commodi, consectetur quidem expedita?
                    {/* {data.payload.description} */}
                </div>
            </div>
            <div className="text3date text-yellow-50">
                11/222.3/32
                {/* <h3>{data.payload.posted_at}</h3> */}
            </div>
        </div>

    );
}

export default TextMoviewDetail;