import React from 'react';

import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

import NotesImg from '/public/note.svg';

export function Home() {
  return (
    <>
      <Container>
        <Brand>
          <img src={NotesImg} alt='imagem da logo' />
          <h1>DevNotes</h1>
        </Brand>

        <Header />

        <Menu>
          <li>
            <ButtonText title='Todos' isActive />
          </li>
          <li>
            <ButtonText title='React' />
          </li>
          <li>
            <ButtonText title='Node' />
          </li>
        </Menu>
        <Search></Search>

        <Content></Content>
        <NewNote>
          <FiPlus />
          Criar Notas
        </NewNote>
      </Container>
    </>
  );
}
