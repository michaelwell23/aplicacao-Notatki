import React, { useState } from 'react';
import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout, ProfileTooltip } from './styles';

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <Profile
        to='/profile'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src='https:/github.com/michaelwell23.png' alt='Fotod do usuário' />
        <div>
          <span>Bem-vindo</span>
          <strong>Michael W. Lopes</strong>
        </div>
        {isHovered && (
          <ProfileTooltip>Click para editar o perfil</ProfileTooltip>
        )}
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
