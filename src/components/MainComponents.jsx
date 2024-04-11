
import CardComponents from "./Cardcomponents";
import Groupmoviestitle from "./groupmovie";
const Maincomponents = () => {
    return (
        <main className="">
            <div className="main_allmovie flex-col justify-start px-9 bg-[#3c0f0f] pb-16">
                <div className=" ml-3">
                    <Groupmoviestitle />
                </div>
                <div className="card">
                    <CardComponents />
                </div>
                <div className=" ml-3">
                    <Groupmoviestitle />
                </div>
            </div>
        </main>
    );
}
export default Maincomponents;