"use client";

import { useState } from "react";

import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { DataChart } from "@/components/DataChart";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

export default () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.entries(data)
      .filter(([k, v]) => !["show", "update", "genre", "error"].includes(k))
      .map(([k, v]) => v);
    if (
      values.includes("") ||
      values.filter((v) => parseFloat(v) <= 0).length > 0
    ) {
      setData({
        ...data,
        show: false,
        update: false,
        error:
          "Error, verifica que todos los campos del formulario sean correctos.",
      });
      return;
    }
    setData({ ...data, show: true, update: true, error: "" });
  };

  return (
    <div className="bg-primary 2xl:h-screen w-screen">
      <h1 className={`font-bold text-3xl mt-5 text-center ${oswald.className}`}>
        Composicion corporal
      </h1>
      <div
        className={`flex flex-col 2xl:flex-row gap-5 mt-10 justify-center ${raleway.className}`}
      >
        <div className="flex flex-col 2xl:flex-row gap-5 w-full justify-center">
          <form onSubmit={handleSubmit}>
            <div className="bg-white w-1/2 2xl:w-auto p-10 mx-auto flex flex-col gap-5 justify-center items-center rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <div className="flex flex-row gap-5">
                <Select
                  labelText={"Genero"}
                  name={"genre"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Peso (kg)"}
                  name={"weight"}
                  data={data}
                  setData={setData}
                />
              </div>
              <div className="flex flex-row gap-5">
                <Input
                  labelText={"Talla (cm)"}
                  name={"height"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Edad"}
                  name={"age"}
                  data={data}
                  setData={setData}
                />
              </div>
              <div className="flex flex-row gap-5">
                <Input
                  labelText={"Bicipital (mm)"}
                  name={"bicipital"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Tricipital (mm)"}
                  name={"tricipital"}
                  data={data}
                  setData={setData}
                />
              </div>
              <Input
                labelText={"Supescapular (mm)"}
                name={"supescapular"}
                data={data}
                setData={setData}
              />
              <Input
                labelText={"Supraileaco (mm)"}
                name={"suprailiac"}
                data={data}
                setData={setData}
              />
              <div className="flex flex-row gap-5">
                <Input
                  labelText={"Biestiloideo (cm)"}
                  name={"bistyloid"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Fémur (cm)"}
                  name={"femur"}
                  data={data}
                  setData={setData}
                />
              </div>
              <div className="flex flex-row gap-5">
                <input
                  type="submit"
                  value="Calcular"
                  className="bg-primary text-white font-bold py-2 px-8 hover:bg-secondary active:bg-primary"
                />
                <input
                  type="button"
                  value="Limpiar"
                  className="bg-primary text-white font-bold py-2 px-8 hover:bg-secondary active:bg-primary"
                  onClick={() => {
                    setData({
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
                  }}
                />
              </div>
            </div>
          </form>
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
