
import { getmoviesById } from "@/service/Movieservice";

const Moviedynamic = async ({ params }) => {
    console.log("para", params.movie);
    const data1 = await getmoviesById(params.movie);
    console.log("datadetail", data1);
    return (
        <main>
            <div className="main w-auto">
                <main className=" bg-amber-950">
                    <div className="Main flex gap-2 w-full mt-28 p-4">
                        <div className="image bg-green-400 h-auto w-2/3">
                            <img src={data1.payload.image} alt="not" />
                        </div>
                        <div className="text w-2/6">
                            <div className="main ml-6 flex flex-col gap-12">
                                <div className="text1 flex flex-col gap-1">
                                    <div className="directorName text-xl text-white">
                                        <h2>{data1.payload.director}</h2>
                                    </div>
                                    <div className="runtime text-sm text-yellow-50">
                                        <p>{data1.payload.runtime} minutes</p>
                                    </div>
                                    <div className="type text-yellow-50">
                                        <p>{data1.payload.genre}</p>
                                    </div>
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text2 flex flex-col gap-1">
                                    <div className="title text-xl text-white">
                                        {data1.payload.movie_title}
                                       ({data1.payload.released_year}) 
                                    </div>
                                    <div className="description text-yellow-50">
                                           {data1.payload.description}
                                    </div>
                                </div>
                                <div className="text3date text-yellow-50 ">
                                    <h3 className="">{data1.payload.posted_at}</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
}
export default Moviedynamic;