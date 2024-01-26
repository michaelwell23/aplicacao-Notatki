import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <div>
          <img src='/public/note.svg' alt='Logo Notatki' />
          <h1>Notatki</h1>
        </div>
        <p>Aplicação para gerenciar as suas anotações.</p>

        <h2>Crie sua Conta</h2>

        <Input placeholder='Nome' type='text' icon={FiUser} />
        <Input placeholder='E-mail' type='text' icon={FiMail} />
        <Input placeholder='Senha' type='password' icon={FiLock} />

        <Button title='Cadastrar' />

        <Link to='/'>Voltar para o Login</Link>
      </Form>
    </Container>
  );
}
