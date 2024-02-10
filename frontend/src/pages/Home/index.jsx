import React, { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import NotesImg from '/note.svg';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);
  const [search, setSeach] = useState([]);
  const [notes, setNotes] = useState([]);

  const navegate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return setTagSelected([]);
    }

    const alreadySelected = tagSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagSelected.filter((tag) => tag !== tagName);
      setTagSelected(filteredTags);
    } else {
      setTagSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navegate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function featchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagSelected}`
      );
      setNotes(response.data);
    }

    featchNotes();
  }, [tagSelected, search]);

  return (
    <>
      <Container>
        <Brand>
          <img src={NotesImg} alt='imagem da logo' />
          <h1>Notatki</h1>
        </Brand>

        <Header />

        <Menu>
          <li>
            <ButtonText
              title='Todos'
              onClick={() => handleTagSelected('all')}
              isActive={tagSelected.length === 0}
            />
          </li>
          {tags &&
            tags.map((tag) => (
              <li key={String(tag.id)}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagSelected.includes(tag.name)}
                />
              </li>
            ))}
        </Menu>

        <Search>
          <Input
            placeholder='Pesquisar pelo Titulo'
            icon={FiSearch}
            onChange={(e) => setSeach(e.target.value)}
          />
        </Search>

        <Content>
          <Section title='Minhas Notas'>
            {notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))}
          </Section>
        </Content>

        <NewNote to='/createnotes'>
          <FiPlus />
          Criar Notas
        </NewNote>
      </Container>
    </>
  );
}
