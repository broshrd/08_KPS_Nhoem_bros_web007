import Backgroud from "@/components/Background";

import Maincomponents from "@/components/MainComponents";
export default function Home() {
  return (
    <main className="">
      <div className=" bg-red-900  bg-opacity-20	">
        <Backgroud/>
      </div>
      <div>
       {/* <Groupmoviestitle data1={data} /> */}
        <Maincomponents/>
      </div>
      <div>
       {/* <Groupmoviestitle data1={data} /> */}
        {/* <MaincomponentsById/> */}
      </div>
    </main> 
  );
}
