import React from 'react';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function CreateNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href=''>Voltar</a>
          </header>
          <Input placeholder='Titulo' />

          <Textarea placeholder='Descrição' />
          <Section title='Links uteis'>
            <NoteItem value='https://google.com' />
            <NoteItem isNew />
          </Section>

          <Section title='Marcadores'>
            <div className='tags'>
              <NoteItem value='react' />
              <NoteItem isNew placeholder='Nova Tag' />
            </div>
          </Section>
          <Button title='Salvar' />
        </Form>
      </main>
    </Container>
  );
}
