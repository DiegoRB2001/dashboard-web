export default (Profile) => {
  return (
    <div className="w-screen h-screen">
      <div className="bg-green-500 flex flex-row p-5">
        <div className="w-max text-center">
          <h1 className="font-bold text-lg">Acerca de mi</h1>
        </div>
      </div>
      <div className="bg-[#40916c] h-full p-5 flex flex-row justify-around">
        <div className="flex flex-col">
          <h1>Diego Rulfo Best</h1>
          <h1></h1>
          <h2>Ing. en Sistemas Computacionales</h2>
          <h3 className="mt-10">Tecnologías utilizadas:</h3>
          <ul className="ml-5">
            <li>Java</li>
            <li>Flutter</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <div className="mt-10">
            <h3>Contacto</h3>
            <div className="flex-col flex justify-around mt-2">
              <p>al19760621@ite.edu.mx</p>
              <p>Ensenada, B.C.</p>
            </div>
          </div>
        </div>
        <div className="bg-red-600 m-5 w-20 h-20 rounded-full">
          Foto de perfil
        </div>
      </div>
    </div>
  );
};
