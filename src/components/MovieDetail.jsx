
import { getmovies, getmoviesById } from "@/service/Movieservice";
import TextMoviewDetail from "./TextMovieDetail";
import { data } from "autoprefixer";

const MovieDetail = (data2) => {
 console.log ("para",data2);
    return ( 
        <main className=" bg-amber-950">
            <div className="Main flex gap-2 w-full mt-28 p-4">
                <div className="image bg-green-400 w-2/3">
                {/* <img src="https://media.themoviedb.org/t/p/w1000_and_h563_face/azwGlWMGlndJX2V8AJpL6fXy1z8.jpg" alt="" /> */}
                    {/* <img src={data2.payload.image} alt="not" /> */}
                </div>
                <div className="text w-2/6">
                    <TextMoviewDetail />
                </div>
            </div>
        </main>
     );
}
 
export default MovieDetail;