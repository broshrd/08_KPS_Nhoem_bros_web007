import { Mina } from "next/font/google";

const NovbarComponent = () => {
    return (
        <main>
            <div className=" flex justify-between p-4 absolute text-white  w-full px-14 top-0">
                <ul>
                    <li>
                        <link rel="stylesheet" href='http://localhost:3000/' />
                        <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="" />
                    </li>
                </ul>
                <ul className=" flex justify-between">
                    <div className="flex items-center gap-9 text-sm">
                        <li className="">
                            <a className="btn btn-ghost">Home</a>
                        </li>
                        <li >
                            <a className="btn btn-ghost">Pupular</a>
                        </li>
                        <li>
                            <a className="btn btn-ghost">Romance</a>
                        </li>
                        <li>
                            <a className="btn btn-ghost">Anime</a>
                        </li>
                        <li className="">
                            <link rel="stylesheet" href="" />
                            <div className="form-control">
                                <input type="text" placeholder=" Type to Search" className="input file-input-bordered text-black bg-slate-200 w-24 md:w-auto" />
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </main>
    );
}

export default NovbarComponent;