import Link from "next/link";

const menuRoutes = [
  { ruta: "/", nombre: "Inicio" },
  { ruta: "/about", nombre: "Acerca de" },
  { ruta: "/composicion", nombre: "Composición corporal" },
];

function Menu() {
  return (
    <div className="w-[20%] bg-[#2d6a4f] h-screen">
      <h1>Menú</h1>
      <ol>
        {menuRoutes.map((menu, index) => (
          <li key={index}>
            <Link href={menu.ruta}>{menu.nombre}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Menu;
