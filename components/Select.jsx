//Component for custom select element, used for the genre input.

import React from "react";

export const Select = ({ name, data, setData, labelText }) => {
  return (
    <div>
      <label className="font-bold">
        {labelText}
        <select
          className="shadows border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal"
          name={name}
          value={data[name]}
          required
          onChange={(e) => {
            setData({
              ...data,
              [name]: e.target.value,
              update: false,
              error: "",
            });
          }}
        >
          <option value={"Hombre"}>Hombre</option>
          <option value={"Mujer"}>Mujer</option>
        </select>
      </label>
    </div>
  );
};
