import React from "react";

import "./style.scss";

export function Buttons(props) {
  const handleReset = () => {
    props.onButtonClick({ type: "reset" });
  };

  const handleOperationDiv = () => {
    props.onButtonClick({ type: "operation", value: "/" });
  };

  const handleOperationMul = () => {
    props.onButtonClick({ type: "operation", value: "*" });
  };

  const handleNumberSeven = () => {
    props.onButtonClick({ type: "number", value: 7 });
  };

  const handleNumberEight = () => {
    props.onButtonClick({ type: "number", value: 8 });
  };

  const handleNumberNine = () => {
    props.onButtonClick({ type: "number", value: 9 });
  };

  const handleOperationMin = () => {
    props.onButtonClick({ type: "operation", value: "-" });
  };

  const handleNumberFour = () => {
    props.onButtonClick({ type: "number", value: 4 });
  };

  const handleNumberFive = () => {
    props.onButtonClick({ type: "number", value: 5 });
  };

  const handleNumberSix = () => {
    props.onButtonClick({ type: "number", value: 6 });
  };

  const handleOperationAdd = () => {
    props.onButtonClick({ type: "operation", value: "+" });
  };

  const handleNumberOne = () => {
    props.onButtonClick({ type: "number", value: 1 });
  };

  const handleNumberTwo = () => {
    props.onButtonClick({ type: "number", value: 2 });
  };

  const handleNumberThree = () => {
    props.onButtonClick({ type: "number", value: 3 });
  };

  const handleOperationEqual = () => {
    props.onButtonClick({ type: "equalOperation", value: "=" });
  };

  const handleNumberZero = () => {
    props.onButtonClick({ type: "number", value: 0 });
  };

  const handleOperationDot = () => {
    props.onButtonClick({ type: "dot", value: "." });
  };

  return (
    <div className="buttons-grid">
      <button className="button button-ac" onClick={handleReset}>
        AC
      </button>
      <button className="button" onClick={handleOperationDiv}>
        /
      </button>
      <button className="button" onClick={handleOperationMul}>
        x
      </button>
      <button className="button" onClick={handleNumberSeven}>
        7
      </button>
      <button className="button" onClick={handleNumberEight}>
        8
      </button>
      <button className="button" onClick={handleNumberNine}>
        9
      </button>
      <button className="button" onClick={handleOperationMin}>
        -
      </button>
      <button className="button" onClick={handleNumberFour}>
        4
      </button>
      <button className="button" onClick={handleNumberFive}>
        5
      </button>
      <button className="button" onClick={handleNumberSix}>
        6
      </button>
      <button className="button" onClick={handleOperationAdd}>
        +
      </button>
      <button className="button" onClick={handleNumberOne}>
        1
      </button>
      <button className="button" onClick={handleNumberTwo}>
        2
      </button>
      <button className="button" onClick={handleNumberThree}>
        3
      </button>
      <button className="button button-equal" onClick={handleOperationEqual}>
        =
      </button>
      <button className="button button-zero" onClick={handleNumberZero}>
        0
      </button>
      <button className="button" onClick={handleOperationDot}>
        .
      </button>
    </div>
  );
}
