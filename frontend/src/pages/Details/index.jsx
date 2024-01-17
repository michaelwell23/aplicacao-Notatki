import { Container, Links } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

function Details() {
  return (
    <>
      <Container>
        <Header />

        <Section title='Links úteis'>
          <Links>
            <li>
              <a href='/'>www.blogdodev.com.br</a>
            </li>
            <li>
              <a href='/'>www.aprendizadoprogramacao.com.br</a>
            </li>
          </Links>
        </Section>

        <Section title='Marcadores'>
          <Tag title='Express' />
          <Tag title='NodeJS' />
          <Tag title='Api-REST' />
        </Section>

        <Button title='Voltar' />
      </Container>
    </>
  );
}

export default Details;
