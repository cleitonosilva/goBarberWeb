
import styled, {css} from 'styled-components'
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container =styled.div<ContainerProps>`
      background: #232129;
      border-radius: 10px;
      width: 100%;

      color: #666360;
      border: 2px solid #232129;


      display: flex;
      align-items: center;

      & + div {
        margin-top: 8px;
      }

${props => props.isFocused && css`
      color: #ff9000;
      border: 2px solid #ff9000;
`  }

${props => props.isFilled && css`
      color: #ff9000;
      
`  }

input {
    flex: 1;
    background: transparent;
    color:#f4ede8;
    padding: 16px;

    &::placeholder{
        color: #666360;
      } 
    }

svg{  
    margin-left: 16px;
}

`