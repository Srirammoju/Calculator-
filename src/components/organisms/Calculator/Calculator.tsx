import React, { useState } from "react";
import { Operator, Digit } from "../../../constant/constant";
import { getCalculatedResult } from "../../../utility/utility";
import Display from "../../atoms/Display/Display";
import CalculatorLayout from "../../molecules/CalculatorLayout.tsx/CalucaltorLayout";
import { StyledCalculator } from "./CalculatorStyled";


export const Calculator = () => {
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<Operator>();
  const [display, setDisplay] = useState<string>("0");

  const calculate = (
    rightOperand: number,
    pendingOperator: Operator
  ): boolean => {
    let calculatedResult:number|boolean = getCalculatedResult(result,pendingOperator,rightOperand);
    setResult(calculatedResult?calculatedResult:0);
    setDisplay(calculatedResult.toString().toString().slice(0, 12));
    return true;
  };

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 12) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPeriodButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setWaitingForOperand(true);
  };

  return (
    <StyledCalculator>
      <Display
        value={display}
        expression={
          typeof pendingOperator !== "undefined"
            ? `${result}${pendingOperator}${waitingForOperand ? "" : display}`
            : ""
        }
      />
      <CalculatorLayout
        onDigitButtonClick={onDigitButtonClick}
        onPeriodButtonClick={onPeriodButtonClick}
        onOperatorButtonClick={onOperatorButtonClick}
        onChangeSignButtonClick={onChangeSignButtonClick}
        onEqualButtonClick={onEqualButtonClick}
        onAllClearButtonClick={onAllClearButtonClick}
        onClearEntryButtonClick={onClearEntryButtonClick}
      />
    </StyledCalculator>
  );
};

export default Calculator;
