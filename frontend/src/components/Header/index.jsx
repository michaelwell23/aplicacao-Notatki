import React, { useState } from 'react';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout, ProfileTooltip } from './styles';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to='/profile'>
        <img src='https:/github.com/michaelwell23.png' alt='Fotod do usuário' />
        <div>
          <span>Bem-vindo</span>
          <strong>Michael W. Lopes</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
