//Form component contained inside the composition, it handles all the data needed to make the calculations.

import React from 'react'

import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

const Form = ({data, setData}) => {

  //Function to handle form submit and input validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.entries(data)
      .filter(([k, v]) => !["show", "update", "genre", "error"].includes(k))
      .map(([k, v]) => v);
    if (
      values.filter((v) => parseFloat(v) <= 0).length > 0
    ) {
      setData({
        ...data,
        show: false,
        update: false,
        error:
          "Error, verifica que todos los campos del formulario sean correctos.",
      });
      return;
    }
    setData({ ...data, show: true, update: true, error: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
            <div className="bg-white w-min 2xl:w-auto p-10 mx-auto flex flex-col gap-5 justify-center items-center rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <div className="flex flex-row gap-5">
                <Select
                  labelText={"Genero"}
                  name={"genre"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Peso (kg)"}
                  name={"weight"}
                  data={data}
                  setData={setData}
                />
              </div>
              <div className="flex flex-row gap-5">
                <Input
                  labelText={"Talla (cm)"}
                  name={"height"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Edad"}
                  name={"age"}
                  data={data}
                  setData={setData}
                />
              </div>
              <div className="flex flex-row gap-5">
                <Input
                  labelText={"Bicipital (mm)"}
                  name={"bicipital"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Tricipital (mm)"}
                  name={"tricipital"}
                  data={data}
                  setData={setData}
                />
              </div>
              <Input
                labelText={"Supescapular (mm)"}
                name={"supescapular"}
                data={data}
                setData={setData}
              />
              <Input
                labelText={"Supraileaco (mm)"}
                name={"suprailiac"}
                data={data}
                setData={setData}
              />
              <div className="flex flex-row gap-5">
                <Input
                  labelText={"Biestiloideo (cm)"}
                  name={"bistyloid"}
                  data={data}
                  setData={setData}
                />
                <Input
                  labelText={"Fémur (cm)"}
                  name={"femur"}
                  data={data}
                  setData={setData}
                />
              </div>
              <div className="flex flex-row gap-5">
                <input
                  type="submit"
                  value="Calcular"
                  className="bg-primary text-white font-bold py-2 px-8 hover:bg-secondary active:bg-primary"
                />
                <input
                  type="button"
                  value="Limpiar"
                  className="bg-primary text-white font-bold py-2 px-8 hover:bg-secondary active:bg-primary"
                  onClick={() => {
                    setData({
                      genre: "Hombre",
                      weight: "",
                      height: "",
                      age: "",
                      bicipital: "",
                      tricipital: "",
                      supescapular: "",
                      suprailiac: "",
                      bistyloid: "",
                      femur: "",
                      show: false,
                      update: false,
                      error: "",
                    });
                  }}
                />
              </div>
            </div>
          </form>
  )
}

export default Form