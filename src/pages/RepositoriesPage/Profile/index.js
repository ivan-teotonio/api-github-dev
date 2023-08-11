import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';


import { Container, Header, Avatar, Login, Name, Inner, Data} from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
      <Login>devsamurai</Login>
      <Name>Dev Samurai</Name>
    </Header>
    <Inner>
    < Data>
    <MdGroup size={20} />
    30&nbsp;<i>seguidores</i>&nbsp;10&nbsp;<i>seguindo</i>  
     </Data>
      <Data>
      <MdWork size={20} /> Ivan Dev
      </Data>
      <Data>
      <MdLocationCity size={20} /> Igarassu Pernambuco
        </Data>
      <Data>
      <MdLink size={20} />&nbsp;
       <a href="https:://ivandev.com.br">ivandev.com.br</a>
      </Data>
    </Inner>
  </Container>
);


export default Profile;
