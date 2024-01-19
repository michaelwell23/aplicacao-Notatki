import React from 'react';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
  return (
    <>
      <Container>
        <Brand>
          <h1>DevNotes</h1>
        </Brand>

        <Header />

        <Menu>
          <ButtonText title='' />
          <ButtonText title='' />
          <ButtonText title='' />
        </Menu>
        <Search></Search>

        <Content></Content>
        <NewNote></NewNote>
      </Container>
    </>
  );
}
