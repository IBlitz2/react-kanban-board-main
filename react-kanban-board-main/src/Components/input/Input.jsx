import React from "react";
import css from "./input.module.css";

export const Input = ({
  isActive, val, handleValue, description, handleDescription,
}) => {
  return (
    <>
      {isActive && (
        <div className={css.box}>
          <input
            className={css.input} type="text"
            placeholder="New task title" value={val} onChange={handleValue} />
        </div>
      )}
    </>
  );
};
