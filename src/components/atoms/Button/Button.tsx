import React from "react"
import { IButtonProps } from "../../../interfaces/IButtonProps"
import { StyledButton } from "./ButtonStyled"

export const Button: React.FC<IButtonProps> = ({ children, color, isLarge, onClick }) => {
    return (
      <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
        {children}
      </StyledButton>
    )
  }
  
  export default Button