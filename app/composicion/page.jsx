"use client";

import { useState } from "react";

import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";
import Graph from "@/components/Graph";
import { Table } from "@/components/Table";
import { Input } from "@/components/Input";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

export default (Composicion) => {
  const [genero, setGenero] = useState("Hombre");
  const [peso, setPeso] = useState(0);
  const [talla, setTalla] = useState("");
  const [edad, setEdad] = useState(0);
  const [bicipital, setBicipital] = useState(0);
  const [tricipital, setTricipital] = useState(0);
  const [supescapular, setSupescapular] = useState(0);
  const [supraileaco, setSupraileaco] = useState(0);
  const [biestiloideo, setBiestiloideo] = useState(0);
  const [femur, setFemur] = useState(0);
  const [densidad, setDensidad] = useState(0);
  const [masaGrasa, setMasaGrasa] = useState(0);
  const [PGC, setPGC] = useState(0);
  const [masaOsea, setMasaOsea] = useState(0);
  const [PMO, setPMO] = useState(0);
  const [masaResidual, setMasaResidual] = useState(0);
  const [PMR, setPMR] = useState(0);
  const [masaMuscular, setMasaMuscular] = useState(0);
  const [PMM, setPMM] = useState(0);
  const [calculado, setCalculado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        tricipital,
        bicipital,
        supescapular,
        supraileaco,
        biestiloideo,
        femur,
      ].some((v) => v <= 0) ||
      [
        tricipital,
        bicipital,
        supescapular,
        supraileaco,
        biestiloideo,
        femur,
      ].includes(NaN)
    ) {
      setError("ERROR: verifica que los datos del formulario sean correctos.");
      setCalculado(false);
      return;
    }
    const x1 = tricipital + bicipital + supescapular + supraileaco;
    const d =
      genero == "Hombre"
        ? 1.1765 - 0.0744 * Math.log10(x1)
        : 1.1567 - 0.0717 * Math.log10(x1);
    const porcentaje = 495 / d - 450;
    const osea =
      Math.pow(
        Math.pow(talla / 100, 2) * (femur / 100) * (biestiloideo / 100) * 400,
        0.712
      ) * 3.02;
    const residual = genero == "Hombre" ? peso * 0.24 : peso * 0.21;
    setDensidad(d);
    setMasaGrasa(peso * (porcentaje / 100));
    setPGC(porcentaje);
    setMasaOsea(osea);
    setPMO((osea * 100) / peso);
    setMasaResidual(residual);
    setPMR((residual * 100) / peso);
    const muscular =
      100 - (porcentaje + (osea * 100) / peso + (residual * 100) / peso);
    setMasaMuscular(muscular);
    setPMM((peso * muscular) / 100);
    setCalculado(true);
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
                <div>
                  <h1 className="font-bold">Genero</h1>
                  <select
                    className="shadows border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="genero"
                    onChange={(e) => {
                      setGenero(e.target.value);
                      setCalculado(false);
                    }}
                  >
                    <option>Hombre</option>
                    <option>Mujer</option>
                  </select>
                </div>
                <Input
                  name={"Peso (kg)"}
                  handleChange={setPeso}
                  setCalculado={setCalculado}
                />
              </div>
              <div className="flex flex-row gap-5">
                <Input
                  name={"Talla (cm)"}
                  handleChange={setTalla}
                  setCalculado={setCalculado}
                />
                <Input
                  name={"Edad"}
                  handleChange={setEdad}
                  setCalculado={setCalculado}
                />
              </div>
              <div className="flex flex-row gap-5">
                <Input
                  name={"Bicipital (mm)"}
                  handleChange={setBicipital}
                  setCalculado={setCalculado}
                />
                <Input
                  name={"Tricipital (mm)"}
                  handleChange={setTricipital}
                  setCalculado={setCalculado}
                />
              </div>
              <Input
                name={"Supescapular (mm)"}
                handleChange={setSupescapular}
                setCalculado={setCalculado}
              />
              <Input
                name={"Supraileaco (mm)"}
                handleChange={setSupraileaco}
                setCalculado={setCalculado}
              />
              <div className="flex flex-row gap-5">
                <Input
                  name={"Biestiloideo (cm)"}
                  handleChange={setBiestiloideo}
                  setCalculado={setCalculado}
                />
                <Input
                  name={"Fémur (cm)"}
                  handleChange={setFemur}
                  setCalculado={setCalculado}
                />
              </div>
              <input
                type="submit"
                value="Calcular"
                className="bg-primary text-white font-bold py-2 px-8 hover:bg-secondary active:bg-primary"
              />
            </div>
          </form>
          <div className="m-10 2xl:m-0 p-5 min-h-[200px] text-lg bg-white 2xl:w-1/2 flex items-stretch overflow-clip text-center rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            {calculado && (
              <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
                <Table
                  masaGrasa={masaGrasa}
                  masaOsea={masaOsea}
                  masaResidual={masaResidual}
                  masaMuscular={masaMuscular}
                  PGC={PGC}
                  PMO={PMO}
                  PMR={PMR}
                  PMM={PMM}
                />
                <Graph
                  porcentajes={[
                    PGC.toFixed(2),
                    PMO.toFixed(2),
                    PMR.toFixed(2),
                    PMM.toFixed(2),
                  ]}
                  calculado={calculado}
                />
                <div>Densidad calculada: {densidad.toFixed(2)}</div>
              </div>
            )}
            {!calculado && <div className="ml-5 my-2">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
