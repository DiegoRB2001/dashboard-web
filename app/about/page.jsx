//This contains the dashboard about page component

import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

export default () => {
  return (
    <div className="w-full bg-primary h-screen">
      <h1 className={`font-bold text-3xl mt-5 text-center ${oswald.className}`}>
        Acerca de mi
      </h1>
      <div
        className={`h-fit p-5 flex flex-col justify-evenly items-center ${raleway.className}`}
      >
        <div className="bg-white flex flex-col justify-evenly items-center py-10 rounded-lg">
          <div className="rounded-full overflow-hidden flex items-center justify-center w-1/4 h-1/4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
              alt=""
            />
          </div>
          <div className="flex flex-col text-center w-1/2 mt-5 text-lg items-center">
            <h1 className="font-bold w-1/2">
              Mi nombre es Diego Rulfo Best y soy estudiante de Ingeniería en
              Sistemas Computacionales.
            </h1>
            <p className="mt-10">
              Tengo conocimiento en desarrollo de páginas web y aplicaciones
              móviles. He desarrollado proyectos utilizando distintas
              tecnologías y frameworks.
            </p>
            <div className="mt-10  rounded-md px-6 py-2">
              <h3 className="font-bold">Contacto</h3>
              <div className="flex-row flex justify-around gap-5 mt-2">
                <p>al19760621@ite.edu.mx</p>
                <p>Ensenada, B.C.</p>
              </div>
            </div>
            <input
              type="submit"
              value="Leer más"
              className="bg-primary text-white rounded-full font-bold mt-5 py-2 px-8 hover:bg-secondary active:bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
