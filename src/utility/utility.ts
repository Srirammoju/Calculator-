import { Operator } from "../constant/constant";

export const getCalculatedResult = (
  result: number,
  pendingOperator: Operator,
  rightOperand: number
) => {
  let newResult = result;

  switch (pendingOperator) {
    case "+":
      newResult += rightOperand;
      break;
    case "-":
      newResult -= rightOperand;
      break;
    case "×":
      newResult *= rightOperand;
      break;
    case "÷":
      if (rightOperand === 0) {
        return false;
      }

      newResult /= rightOperand;
  }
  return newResult;
};
