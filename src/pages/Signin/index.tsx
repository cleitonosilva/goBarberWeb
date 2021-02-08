import React from 'react';

import logoimg from '../../assets/logo.svg'

import {Container, Content, Background } from './styles'

const Sigin: React.FC=()=> (

<>
<Container>
    <Content>
    <img src={logoimg} alt="GoBarber"/>
    </Content>
    <Background />
</Container>
</>
);

export default Sigin;
