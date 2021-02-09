import React from 'react';

import logoimg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

import {Container, Content, Background } from './styles'

const Sigin: React.FC=()=> (

<>
<Container>
    <Content>
    <img src={logoimg} alt="GoBarber"/>

    <form>
        <h1>Faça seu Logon</h1>

        <input placeholder="E-mail"/>
        <input type="passowrd" placeholder="Senha"/>
    
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
   </form>
       <a href="/"> <FiLogIn/>Criar conta</a>
    </Content>
    <Background />
</Container>
</>
);

export default Sigin;
