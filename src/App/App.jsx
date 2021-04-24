import React, { useState } from "react";
import { Display } from "../components/Display";
import { Buttons } from "../components/Buttons";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./style.scss";

export function App() {
  // - result -> used in the Display component
  const [result, setResult] = useState("0");
  // - input -> History of values given by the user -> numbers and operations
  const [input, setInput] = useState([]);

  const lastInput = input[input.length - 1];

  // Handle all math expression and returns the result
  // - result shows the new resulted number
  // - input array will hold only the last evaluated  number
  const handleEvaluation = () => {
    const copiedState = [...input].join(" ");
    const evaluation = `${eval(copiedState)}`;
    setResult(evaluation);
    setInput([evaluation]);
  };

  // Handles reset (AC) operation
  // - resets result to an empty string
  // - input to an empty array
  const handleReset = () => {
    setResult("0");
    setInput([]);
  };

  // Handles typed numbers -> joining them until the user press a operator sinal
  // - joint numbers to form a spelled number
  // - atualized each typed number on result -> which displays on the app
  // - atualize the last element of the input array
  const handleNumber = (action) => {
    const updatedLastInputEl =
      `${lastInput === undefined ? "" : lastInput}` + action.value;

    const newInput = [...input];
    newInput.splice(input.length - 1, 1, updatedLastInputEl);

    setResult(newInput.join(" "));
    setInput(newInput);
  };

  // Handles a typed operator to show on diplay and save on the input array as a history to be used after the equals be pressed
  // - add the operator sign on the result display and the input array
  const pushInputEl = (action) => {
    const addingNewInput = [...input, `${action.value}`];

    setResult(addingNewInput.join(" "));
    setInput(addingNewInput);
  };

  //Handles the conditions of each typed button to choose how it will be processed
  const handleButtonClick = (action) => {
    const isLastInputOperator =
      lastInput === "*" ||
      lastInput === "/" ||
      lastInput === "+" ||
      lastInput === "-";

    switch (action.type) {
      case "reset": {
        handleReset();
        break;
      }

      case "number": {
        if (input.length === 0) {
          handleNumber(action);
        } else if (isLastInputOperator) {
          pushInputEl(action);
        } else {
          handleNumber(action);
        }
        break;
      }

      case "operation": {
        if (!isLastInputOperator) {
          pushInputEl(action);
        }
        break;
      }

      case "dot": {
        if (!isLastInputOperator && !lastInput.includes(".")) {
          handleNumber(action);
        }
        break;
      }

      case "evaluate": {
        if (input.length >= 3) {
          handleEvaluation();
        }
        break;
      }
    }
  };

  return (
    <div className="calculator-wrapper">
      <div>
        <Header title="Calculator" />
        <div className="calculator">
          <Display value={result} />
          <Buttons onButtonClick={handleButtonClick} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
