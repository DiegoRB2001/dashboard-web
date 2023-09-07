//Component for custom input element, used to handle all the data for the calculations.

import React from "react";

export const Input = ({ name, data, setData, labelText }) => {
  return (
    <div>
      <label className="font-bold">
        {labelText}
        <input
          value={data[name]}
          name={name}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal block"
          type="number"
          onChange={(e) => {
            setData({
              ...data,
              [name]: e.target.value == "" ? "" : parseFloat(e.target.value),
              update: false,
              error: "",
            });
          }}
        />
      </label>
    </div>
  );
};
