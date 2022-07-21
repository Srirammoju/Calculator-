import React, { useEffect } from "react";
import { Digit } from "../../../constant/constant";
import { ICalculatorLayoutProps } from "../../../interfaces/ICalculatorLayoutProps";
import Button from "../../atoms/Button/Button";
import { StyledLayout } from "./CalculatorLayoutStyled";

export const CalculatorLayout: React.FC<ICalculatorLayoutProps> = ({
  onDigitButtonClick,
  onPeriodButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit);
    } else if (keyCode >= 96 && keyCode <= 105) {
      onDigitButtonClick((keyCode - 96) as Digit);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick("×");
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick("÷");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick();
    } else if (keyCode === 46) {
      onClearEntryButtonClick();
    } else if (keyCode === 27) {
      onAllClearButtonClick();
    } else if (keyCode === 78) {
      onChangeSignButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <StyledLayout>
      <Button color="red" onClick={onAllClearButtonClick}>
        AC
      </Button>
      <Button onClick={onClearEntryButtonClick}>C</Button>
      <Button onClick={onChangeSignButtonClick}>-/+</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("÷")}>
        ÷
      </Button>
      <Button onClick={() => onDigitButtonClick(7)}>7</Button>
      <Button onClick={() => onDigitButtonClick(8)}>8</Button>
      <Button onClick={() => onDigitButtonClick(9)}>9</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("×")}>
        ×
      </Button>
      <Button onClick={() => onDigitButtonClick(4)}>4</Button>
      <Button onClick={() => onDigitButtonClick(5)}>5</Button>
      <Button onClick={() => onDigitButtonClick(6)}>6</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("-")}>
        -
      </Button>
      <Button onClick={() => onDigitButtonClick(1)}>1</Button>
      <Button onClick={() => onDigitButtonClick(2)}>2</Button>
      <Button onClick={() => onDigitButtonClick(3)}>3</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("+")}>
        +
      </Button>
      <Button onClick={() => onDigitButtonClick(0)}>0</Button>
      <Button onClick={onPeriodButtonClick}>.</Button>
      <Button color="green" isLarge={true} onClick={onEqualButtonClick}>
        =
      </Button>
    </StyledLayout>
  );
};

export default CalculatorLayout;
