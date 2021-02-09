
import styled from 'styled-components'

export const Container =styled.div`
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      
      width: 100%;
      color: #666360;

      display: flex;
      align-items: center;

      & + div {
        margin-top: 8px;
      }

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