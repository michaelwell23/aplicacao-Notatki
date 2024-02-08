import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function CreateNote() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navegate = useNavigate();

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

  async function handleNewNote() {
    if (!title) {
      return alert('Digite um titulo para adicionar uma nota.');
    }

    if (newLink) {
      return alert(
        'Há um Link que não foi adicionada, clique no + para adiciona-lo antes de proceguir ou então deixe o campo vazio.'
      );
    }

    if (newTag) {
      return alert(
        'Há uma tag que não foi adicionada, clique no + para adiciona-la antes de proceguir ou então deixe o campo vazio.'
      );
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    });
    alert('Nota criada com sucesso!');
    navegate('/');
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
          <Input
            placeholder='Titulo'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder='Observações'
            onChange={(e) => setDescription(e.target.value)}
          />

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
          <Button title='Salvar' onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
