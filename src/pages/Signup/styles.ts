import styled from "styled-components";
import signInBackgroundImg from "../../assets/cadastro.png";
import { shade } from 'polished';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  align-items: center;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color:#f4ede8;

      &::placeholder{
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }
   

    a{  
      color:#f4ede8;
      display: block;
      margin-top:24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover{
        color:${shade(0.2,'#f4ede8' )};
        
      }
    }
  }

  > a {
      color:#ff9000;
      display: flex;
      align-items: center;
      margin-top:24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover{
        color:${shade(0.2,'#ff9000' )};
      }

      svg{
        margin-right: 16px;
      }
    }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
