import React from "react";
import { Display } from "../components/Display";
import { Buttons } from "../components/Buttons";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./style.scss";

export class App extends React.Component {
  constructor(props) {
    super(props);

    // Create initial state
    // - result -> used in the Display component
    // - input -> History of values given by the user -> numbers and operations
    this.state = { result: "0", input: [] };

    // Binds event handlers so when user click handlers are called with the correct `this` context
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // Handle all math expression and returns the result
  // - result shows the new resulted number
  // - input array will hold only the last evaluated  number
  handleEvaluation() {
    const copiedState = [...this.state.input].join(" ");
    const evaluation = `${eval(copiedState)}`;

    this.setState({
      result: evaluation,
      input: [evaluation],
    });
  }
  // Gets last element inside this.state.input -> last value given by the user
  getLastInputEl() {
    return this.state.input[this.state.input.length - 1];
  }

  // Handles reset (AC) operation
  // - resets result to an empty string
  // - input to an empty array
  handleReset() {
    this.setState({ result: "0", input: [] });
  }

  // Handles typed numbers -> joining them until the user press a operator sinal
  // - joint numbers to form a spelled number
  // - atualized each typed number on result -> which displays on the app
  // - atualize the last element of the input array
  handleNumber(action) {
    const lastInputEl = this.getLastInputEl();

    const updatedLastInputEl =
      `${lastInputEl === undefined ? "" : lastInputEl}` + action.value;

    const newInput = [...this.state.input];
    newInput.splice(this.state.input.length - 1, 1, updatedLastInputEl);

    this.setState({ result: newInput.join(" "), input: newInput });
  }

  // Handles a typed operator to show on diplay and save on the input array as a history to be used after the equals be pressed
  // - add the operator sinal on the result display and the input array
  pushInputEl(action) {
    const addingNewInput = [...this.state.input, `${action.value}`];

    this.setState({
      result: addingNewInput.join(" "),
      input: addingNewInput,
    });
  }

  //Handles the conditions of each typed button to choose how it will be processed
  handleButtonClick(action) {
    const lastInput = this.getLastInputEl();
    const isLastInputOperator =
      lastInput === "*" ||
      lastInput === "/" ||
      lastInput === "+" ||
      lastInput === "-";

    if (action.type === "reset") {
      this.handleReset();
      return;
    }

    if (this.state.input.length === 0) {
      if (action.type === "number") {
        this.handleNumber(action);
      }
      return;
    }

    if (action.type === "number") {
      if (isLastInputOperator) {
        this.pushInputEl(action);
      } else {
        this.handleNumber(action);
      }
      return;
    }

    if (action.type === "operation") {
      if (!isLastInputOperator) {
        this.pushInputEl(action);
      }
      return;
    }

    if (action.type === "dot") {
      if (!isLastInputOperator && !lastInput.includes(".")) {
        this.handleNumber(action);
      }
      return;
    }

    if (action.type === "equalOperation") {
      if (this.state.input.length >= 3) {
        this.handleEvaluation();
      }
      return;
    }
  }

  render() {
    return (
      <div className="calculator-wrapper">
        <div>
          <Header title="Calculator" />
          <div className="calculator">
            <Display value={this.state.result} />
            <Buttons onButtonClick={this.handleButtonClick} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
