//This contains the body composition dashboard page, able to calculate and display body mass ratio given a set of data.

"use client";

import { useState } from "react";

import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";
import { DataChart } from "@/components/DataChart";
import Form from "@/components/Form";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

export default () => {
  //All data needed for the page operation is stored inside this useState hook.
  const [data, setData] = useState({
    genre: "Hombre",
    weight: "",
    height: "",
    age: "",
    bicipital: "",
    tricipital: "",
    supescapular: "",
    suprailiac: "",
    bistyloid: "",
    femur: "",
    show: false,
    update: false,
    error: "",
  });
  return (
    <div className="bg-primary 2xl:h-screen w-screen">
      <h1 className={`font-bold text-3xl mt-5 text-center ${oswald.className}`}>
        Composición corporal
      </h1>
      <div
        className={`flex flex-col 2xl:flex-row gap-5 mt-10 justify-center ${raleway.className}`}
      >
        <div className="flex flex-col 2xl:flex-row gap-5 w-full justify-center">
          <Form data={data} setData={setData}/>
          <div className="m-10 2xl:m-0 p-5 min-h-[200px] text-lg bg-white 2xl:w-1/2 flex items-stretch overflow-clip text-center rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            {data.show && <DataChart data={data} />}
            {!data.show && (
              <div className="ml-5 my-2 text-center w-full h-full flex items-center justify-center">
                {data.error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
