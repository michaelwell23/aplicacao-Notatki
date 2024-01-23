import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
          <img src='/public/note.svg' alt='Logo DevNotes' />
          <h1>DevNotes</h1>
        </div>
        <p>Aplicação para gerenciar as suas anotações.</p>

        <h2>Faça seu Login</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} />
        <Input placeholder='Senha' type='password' icon={FiLock} />

        <Button title='Entrar' />

        <a href='#'>Criar Conta</a>
      </Form>
      <Background />
    </Container>
  );
}
