import React from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/input';
import { Section } from '../../components/Section';

import NotesImg from '/note.svg';
import { Note } from '../../components/Note';

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
        <Search>
          <Input placeholder='Pesquisar pelo Titulo' icon={FiSearch} />
        </Search>

        <Content>
          <Section title='Minhas Notas'>
            <Note
              data={{
                title: 'NodeJS Criando servidores com JavaScript',
                tags: [
                  { id: 1, name: 'nodejs' },
                  { id: 2, name: 'express' },
                  { id: 3, name: 'postgre' },
                  { id: 4, name: 'docker' },
                ],
              }}
            />
          </Section>
        </Content>

        <NewNote>
          <FiPlus />
          Criar Notas
        </NewNote>
      </Container>
    </>
  );
}
