import React from "react";

export const Input = ({ name, handleChange, setCalculado }) => {
  return (
    <div>
      <h1 className="font-bold">{name}</h1>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={(e) => {
          handleChange(parseFloat(e.target.value));
          setCalculado(false);
        }}
      />
    </div>
  );
};
