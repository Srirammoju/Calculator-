import { Digit, Operator } from "../constant/constant"

export interface ICalculatorLayoutProps {
    onDigitButtonClick: (digit: Digit) => void
    onPeriodButtonClick: () => void
    onOperatorButtonClick: (operator: Operator) => void
    onChangeSignButtonClick: () => void
    onEqualButtonClick: () => void
    onAllClearButtonClick: () => void
    onClearEntryButtonClick: () => void
  }