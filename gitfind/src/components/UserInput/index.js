import React from "react";
import "./styles.css";

const UserInput = ({ value, onChange }) => {
  return (
    <input
      name="usuario"
      value={value}
      onChange={onChange}
      placeholder="@username"
    />
  )
}

export { UserInput } ;
