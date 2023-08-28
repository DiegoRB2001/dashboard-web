"use client";

import { useState } from "react";

import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

const handleSubmit = (e) => {
  e.preventDefault();
};

export default (Composicion) => {
  const [genero, setGenero] = useState("Hombre");
  const [peso, setPeso] = useState(0);
  const [talla, setTalla] = useState("");
  const [edad, setEdad] = useState(0);
  const [bicipital, setBicipital] = useState(0);
  const [tricipital, setTricipital] = useState(0);
  const [supescapular, setSupescapular] = useState(0);
  const [supraileaco, setSupraileaco] = useState(0);
  const [densidad, setDensidad] = useState(0);
  const [PGC, setPGC] = useState(0);
  const [calculado, setCalculado] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="bg-primary w-full">
      <h1 className={`font-bold text-3xl mt-5 text-center ${oswald.className}`}>
        Composicion corporal
      </h1>
      <form onSubmit={handleSubmit}>
        <div
          className={`flex flex-col items-center gap-5 mt-10 ${raleway.className}`}
        >
          <div className="bg-white p-10 items-center flex flex-col gap-5 justify-center rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-bold">Genero</h1>
                <select
                  className="shadows border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="genero"
                  onChange={(e) => {
                    setGenero(e.target.value);
                  }}
                >
                  <option>Hombre</option>
                  <option>Mujer</option>
                </select>
              </div>
              <div>
                <h1 className="font-bold">Peso</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setPeso(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-bold">Talla</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setTalla(e.target.value);
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold">Edad</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  onChange={(e) => {
                    setEdad(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-bold">Bicipital</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setBicipital(parseFloat(e.target.value));
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold">Tricipital</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setTricipital(parseFloat(e.target.value));
                  }}
                />
              </div>
            </div>
            <div>
              <h1 className="font-bold">Supescapular</h1>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => {
                  setSupescapular(parseFloat(e.target.value));
                }}
              />
            </div>
            <div>
              <h1 className="font-bold">Supraileaco</h1>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => {
                  setSupraileaco(parseFloat(e.target.value));
                }}
              />
            </div>
            <input
              type="submit"
              value="Calcular"
              className="bg-primary text-white font-bold py-2 px-8 hover:bg-secondary active:bg-primary"
              onClick={() => {
                if (
                  [tricipital, bicipital, supescapular, supraileaco].some(
                    (v) => v <= 0
                  ) ||
                  [tricipital, bicipital, supescapular, supraileaco].includes(
                    NaN
                  )
                ) {
                  setError(
                    "ERROR: verifica que los datos del formulario sean correctos."
                  );
                  setCalculado(false);
                  return;
                }
                const x1 = tricipital + bicipital + supescapular + supraileaco;
                const d =
                  genero == "Hombre"
                    ? 1.1765 - 0.0744 * Math.log10(x1)
                    : 1.1567 - 0.0717 * Math.log10(x1);
                const porcentaje = 495 / d - 450;
                setDensidad(d);
                setPGC(porcentaje);
                setCalculado(true);
              }}
            />
          </div>
          <div className="mt-5 p-0 text-lg bg-white w-3/5 h-32 overflow-clip flex items-center justify-center text-center rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            {calculado && (
              <div>
                <div className="ml-5 my-2">Densidad calculada: {densidad}</div>
                <div className="ml-5">PGC calculado: {PGC}</div>
              </div>
            )}
            {!calculado && <div className="ml-5 my-2">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};
