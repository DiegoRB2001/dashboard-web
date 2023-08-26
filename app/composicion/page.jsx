"use client";

const handleSubmit = (e) => {
  e.preventDefault();
};

export default (Composicion) => {
  return (
    <div className="bg-green-400 w-full">
      <form onSubmit={handleSubmit}>
        <h1>Composicion corporal</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row gap-5">
            <div>
              <h1>Genero</h1>
              <input type="text" />
            </div>
            <div>
              <h1>Peso</h1>
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div>
              <h1>Talla</h1>
              <input type="text" />
            </div>
            <div>
              <h1>Edad</h1>
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div>
              <h1>Bicipital</h1>
              <input type="text" />
            </div>
            <div>
              <h1>Tricipital</h1>
              <input type="text" />
            </div>
          </div>
          <h1>Supescapular</h1>
          <input type="text" />
          <h1>Supraileaco</h1>
          <input type="text" />
          <input type="submit" value="Calcular" className="bg-green-800" />
        </div>
      </form>
    </div>
  );
};
