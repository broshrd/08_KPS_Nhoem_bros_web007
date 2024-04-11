
import { getmovies } from "@/service/Movieservice";
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
const CardComponents = async () => {
    const data = await getmovies();
    return (
        <main>
            <Carousel
                opts={{
                    align: "start",
                }}
                className=" w-full"
            >
                {/* <link rel="stylesheet" href={`view-movie-detail/22`} /> */}
                <CarouselContent>
                    {data.payload.map((movie) => (

                        <CarouselItem key={movie.movie_id} className="md:basis-1/2 lg:basis-3/12">
                            <div className="flex gap-2">
                                <div className="listAllImg bg-slate-50 w-full gap-2 mx-2 my-2 rounded-2xl">
                                    <div className="card p-2 mb-2 ">
                                        <div className="img h-3/5 p-3 ">
                                            <Link href={`view-movie-detail/${movie.movie_id}`}>
                                                <Button className="bg-indigo-500 hover:bg-gray-600 focus-visible:outline-indigo-600 w-32  hidden"
                                                />
                                                <img src={movie.image} alt="" />
                                            </Link>
                                            {/* <link href={`view-movie-detail/22`}> */}
                                            {/* <img src={movie.image} alt="" /> */}
                                            {/* </link> */}
                                        </div>
                                        <div className="text h-2/5 px-5 text-black ">
                                            <div className="title text-2xl text-black py-2">
                                                <h2 className=" px-1 line-clamp-1">{movie.movie_title}</h2>
                                            </div>
                                            <div className="description line-clamp-2 pb-[15]">
                                                <p>{movie.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    );
}
export default CardComponents;