import React, { useRef } from "react";
import "./input.css";

function Input({ loc }) {
  const inputRef = useRef();
  function func1(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    loc(inputValue);
  }

  return (
    <div className="maininput">
      <form onSubmit={func1}>
        <input ref={inputRef} type="text" placeholder="Search location ..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Input;
