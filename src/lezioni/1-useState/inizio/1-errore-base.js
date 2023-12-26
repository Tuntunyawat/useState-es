import React from "react";

const ErroreBase = () => {
  let titolo = "Hello World";

  const cambiaTitolo = () => {
    titolo = "Sono un Nuovo Titolo";
    console.log(titolo);
  };
  return (
    <React.Fragment>
      <h2>{titolo}</h2>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={cambiaTitolo}
      >
        Change Me
      </button>
    </React.Fragment>
  );
};

export default ErroreBase;
