import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
          <img src='/public/note.svg' alt='Logo Notatki' />
          <h1>Notatki</h1>
        </div>
        <p>Aplicação para gerenciar as suas anotações.</p>

        <h2>Faça seu Login</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} />
        <Input placeholder='Senha' type='password' icon={FiLock} />

        <Button title='Entrar' />

        <Link to='/signup'>Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
