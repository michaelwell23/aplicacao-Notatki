import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: currentPassword,
      password: newPassword,
    };
    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src='http://github.com/michaelwell23.png'
            alt='Foto do Usuário'
          />

          <label htmlFor='avatar'>
            <FiCamera />

            <input id='avatar' type='file' />
          </label>
        </Avatar>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='E-mail'
          type='email'
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Senha Atual'
          type='password'
          icon={FiLock}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title='Salvar' onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
