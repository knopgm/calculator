import React, { useCallback, useMemo } from "react";
import classNames from "classnames";

import "./style.scss";

export function Buttons({ onButtonClick }) {
  const handleClick = useCallback(
    (type, value) => onButtonClick({ type, value }),
    [onButtonClick]
  );

  // prettier-ignore
  const buttons = useMemo(() => [
    { label: "AC", type: "reset", handler: handleClick.bind(null, "reset") },
    { label: "/", type: "operation", handler: handleClick.bind(null, "operation", "/") },
    { label: "x", type: "operation", handler: handleClick.bind(null, "operation", "*") },
    { label: "7", type: "number", handler: handleClick.bind(null, "number", 7) },
    { label: "8", type: "number", handler: handleClick.bind(null, "number", 8) },
    { label: "9", type: "number", handler: handleClick.bind(null, "number", 9) },
    { label: "-",  type: "operation", handler: handleClick.bind(null, "operation", "-") },
    { label: "4", type: "number", handler: handleClick.bind(null, "number", 4) },
    { label: "5", type: "number", handler: handleClick.bind(null, "number", 5) },
    { label: "6", type: "number", handler: handleClick.bind(null, "number", 6) },
    { label: "+", type: "operation", handler: handleClick.bind(null, "operation", "+") },
    { label: "1", type: "number", handler: handleClick.bind(null, "number", 1) },
    { label: "2", type: "number", handler: handleClick.bind(null, "number", 2) },
    { label: "3", type: "number", handler: handleClick.bind(null, "number", 3) },
    { label: "=", type: "evaluate", handler: handleClick.bind(null, "evaluate") },
    { label: "0", type: "number", handler: handleClick.bind(null, "number", 0) },
    { label: ".", type: "dot", handler: handleClick.bind(null, "dot", ".") },
  ], [handleClick]);

  return (
    <div className="buttons-grid">
      {buttons.map((buttonConfig) => (
        <button
          key={buttonConfig.label}
          className={classNames("button", {
            "button--operation": buttonConfig.type === "operation",
            "button--reset": buttonConfig.type === "reset",
            "button--zero": buttonConfig.label === "0",
            "button--equal": buttonConfig.type === "evaluate",
          })}
          onClick={buttonConfig.handler}
        >
          {buttonConfig.label}
        </button>
      ))}
    </div>
  );
}
