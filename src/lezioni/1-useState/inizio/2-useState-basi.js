import React, { useState } from "react";

const UsoBase = () => {
  // const { log } = console;
  // log(useState("Hello World!!"));

  // const value = useState()[0];
  // const handler = useState()[1];
  // log(value, handler);

  const [titolo, setTitolo] = useState("Hello World!!");
  const cambiaTitolo = () => {
    setTitolo("OHHH Broski sono un'altro Titolo!!, BUON NATALE EH!!");
  };

  return (
    <>
      <h2>{titolo}</h2>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={cambiaTitolo}
      >
        Change Me
      </button>
    </>
  );
};

export default UsoBase;
