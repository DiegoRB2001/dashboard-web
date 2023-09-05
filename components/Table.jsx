import React from "react";

export const Table = ({
  masaGrasa,
  masaMuscular,
  masaOsea,
  masaResidual,
  PGC,
  PMM,
  PMO,
  PMR,
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="px-6 py-4 border-r">Componente</th>
          <th className="px-6 py-4 border-r">%</th>
          <th className="px-6 py-4">kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-4 border-r">Masa grasa</td>
          <td className="px-6 py-4 border-r">{PGC.toFixed(2)}</td>
          <td className="px-6 py-4">{masaGrasa.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 border-r">Masa osea</td>
          <td className="px-6 py-4 border-r">{PMO.toFixed(2)}</td>
          <td className="px-6 py-4">{masaOsea.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 border-r">Masa residual</td>
          <td className="px-6 py-4 border-r">{PMR.toFixed(2)}</td>
          <td className="px-6 py-4">{masaResidual.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 border-r">Masa muscular</td>
          <td className="px-6 py-4 border-r">{masaMuscular.toFixed(2)}</td>
          <td className="px-6 py-4">{PMM.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};
