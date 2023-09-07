export default ({genre,
weight,
height,
bicipital,
tricipital,
supescapular,
suprailiac,
bistyloid,
femur}) => {
    const x1 = tricipital + bicipital + supescapular + suprailiac;
    const density =
      genre == "Hombre"
        ? 1.1765 - 0.0744 * Math.log10(x1)
        : 1.1567 - 0.0717 * Math.log10(x1);
    const fatMassPorcentage = 495 / density - 450;
    const fatMass = weight * (fatMassPorcentage / 100)
    const boneMass =
      Math.pow(
        Math.pow(height / 100, 2) * (femur / 100) * (bistyloid / 100) * 400,
        0.712
      ) * 3.02;
    const boneMassPorcentage = (boneMass * 100) / weight;
    const residualMass = genre == "Hombre" ? weight * 0.24 : weight * 0.21;
    const residualMassPorcentage = (residualMass * 100) / weight;
    const muscularMassPorcentage =
      100 - (fatMassPorcentage + boneMassPorcentage + residualMassPorcentage);
    const muscularMass = (weight * muscularMassPorcentage) / 100;
      
        return {density, fatMass, fatMassPorcentage, boneMass, boneMassPorcentage, residualMass, residualMassPorcentage, muscularMass, muscularMassPorcentage};
}



