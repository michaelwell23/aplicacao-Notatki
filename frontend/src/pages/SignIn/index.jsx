import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <div>
          <img src='/note.svg' alt='Logo Notatki' />
          <h1>Notatki</h1>
        </div>
        <p>Aplicação para gerenciar as suas anotações.</p>

        <h2>Faça seu Login</h2>

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title='Entrar' onClick={handleSignIn} />

        <Link to='/signup'>Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
