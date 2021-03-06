import React from 'react';

import logoimg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input'
import Button from '../../components/Button'

import {Container, Content, Background } from './styles'

const Sigin: React.FC=()=> (

<>
<Container>
    <Content>
    <img src={logoimg} alt="GoBarber"/>

    <form>
        <h1>Faça seu Logon</h1>

        <Input name="e-mail" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
    
        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
   </form>
       <a href="/"> <FiLogIn/>Criar conta</a>
    </Content>
    <Background />
</Container>
</>
);

export default Sigin;
