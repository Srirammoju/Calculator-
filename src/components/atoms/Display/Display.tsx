import React from 'react'
import { IDisplayProps } from '../../../interfaces/IDisplayProps'
import { StyledDisplay, StyledIndicatorList, StyledExpression, StyleScreen } from './DisplayStyled'

export const Display: React.FC<IDisplayProps> = ({ value, expression }) => {
  return (
    <StyledDisplay>
      <StyledIndicatorList>
        <StyledExpression>
          {expression}
        </StyledExpression>
      </StyledIndicatorList>

      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
}

export default Display
