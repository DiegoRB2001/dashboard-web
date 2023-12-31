//Menu component used to navigate through all pages contained in the project.

import Link from "next/link";
import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

const menuRoutes = [
  { ruta: "/", nombre: "Inicio" },
  { ruta: "/about", nombre: "Acerca de" },
  { ruta: "/composition", nombre: "Composición corporal" },
];

function Menu() {
  return (
    <div className="w-[20%] bg-terciary">
      <div className={`bg-secondary mb-2 text-lg ${oswald.className}`}>
        <h1 className="text-center">Menú</h1>
      </div>
      <ol>
        {menuRoutes.map((menu, index) => (
          <li
            key={index}
            className={`${raleway.className} hover:bg-secondary active:bg-primary pl-2`}
          >
            <Link href={menu.ruta}>
              <div className="w-full py-2">{menu.nombre}</div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Menu;
