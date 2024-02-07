import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';
import { Link } from 'react-router-dom';

export function CreateNote() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(LinkDeleted) {
    setLinks((prevState) => prevState.filter((link) => link !== LinkDeleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>Voltar</Link>
          </header>
          <Input placeholder='Titulo' />
          <Textarea placeholder='Observações' />

          <Section title='Links uteis'>
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder='Novo Link'
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title='Marcadores'>
            <div className='tags'>
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isNew
                placeholder='Nova Tag'
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title='Salvar' />
        </Form>
      </main>
    </Container>
  );
}
