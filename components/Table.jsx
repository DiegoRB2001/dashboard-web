export const Table = ({
  fatMass,
  fatMassPorcentage,
  boneMass,
  boneMassPorcentage,
  residualMass,
  residualMassPorcentage,
  muscularMass,
  muscularMassPorcentage,
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="px-6 py-2 border-r">Componente</th>
          <th className="px-6 py-2 border-r">%</th>
          <th className="px-6 py-2">kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-2 border-r">Masa grasa</td>
          <td className="px-6 py-2 border-r">{fatMassPorcentage.toFixed(2)}</td>
          <td className="px-6 py-2">{fatMass.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-r">Masa osea</td>
          <td className="px-6 py-2 border-r">
            {boneMassPorcentage.toFixed(2)}
          </td>
          <td className="px-6 py-2">{boneMass.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-r">Masa residual</td>
          <td className="px-6 py-2 border-r">
            {residualMassPorcentage.toFixed(2)}
          </td>
          <td className="px-6 py-2">{residualMass.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-r">Masa muscular</td>
          <td className="px-6 py-2 border-r">
            {muscularMassPorcentage.toFixed(2)}
          </td>
          <td className="px-6 py-2">{muscularMass.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};
