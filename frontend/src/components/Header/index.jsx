import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src='https:/github.com/michaelwell23.png' alt='Fotod do usuário' />
        <div>
          <span>Bem-vindo</span>
          <strong>Michael W. Lopes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
