import Link from "next/link";
import { Oswald } from "next/font/google";
import { Raleway } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

const menuRoutes = [
  { ruta: "/", nombre: "Inicio" },
  { ruta: "/about", nombre: "Acerca de" },
  { ruta: "/composicion", nombre: "Composición corporal" },
];

function Menu() {
  return (
    <div className="w-[20%] bg-[#48DB96] h-screen">
      <div className={`bg-[#8EE1BA] mb-2 text-lg ${oswald.className}`}>
        <h1 className="text-center">Menú</h1>
      </div>
      <ol>
        {menuRoutes.map((menu, index) => (
          <Link href={menu.ruta}>
            <li
              key={index}
              className={`${raleway.className} hover:bg-[#8EE1BA] active:bg-green-400 pl-2`}
            >
              {menu.nombre}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export default Menu;
