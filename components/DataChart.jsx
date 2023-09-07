//Data chart component used in body composition page. This holds all results calculated from the given data.

import Graph from "@/components/Graph";
import { Table } from "@/components/Table";
import massCalculation from "@/utils/massCalculation";
import { useEffect, useState } from "react";

export const DataChart = ({ data }) => {
  const [massData, setMassData] = useState({
    density: 0,
    fatMass: 0,
    fatMassPorcentage: 0,
    boneMass: 0,
    boneMassPorcentage: 0,
    residualMass: 0,
    residualMassPorcentage: 0,
    muscularMass: 0,
    muscularMassPorcentage: 0,
  });

  //Calculations are made when data is submited using the form.
  useEffect(() => {
    if (data.update) {
      setMassData(massCalculation(data));
    }
  }, [data.update]);

  const {
    density,
    fatMass,
    fatMassPorcentage,
    boneMass,
    boneMassPorcentage,
    residualMass,
    residualMassPorcentage,
    muscularMass,
    muscularMassPorcentage,
  } = massData;

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
      <Table
        fatMass={fatMass}
        boneMass={boneMass}
        residualMass={residualMass}
        muscularMass={muscularMass}
        fatMassPorcentage={fatMassPorcentage}
        boneMassPorcentage={boneMassPorcentage}
        residualMassPorcentage={residualMassPorcentage}
        muscularMassPorcentage={muscularMassPorcentage}
      />
      <Graph
        percentages={[
          fatMassPorcentage.toFixed(2),
          boneMassPorcentage.toFixed(2),
          residualMassPorcentage.toFixed(2),
          muscularMassPorcentage.toFixed(2),
        ]}
      />
      <div>Densidad calculada: {density.toFixed(2)}</div>
    </div>
  );
};
