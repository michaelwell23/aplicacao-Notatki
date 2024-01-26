import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Content>
            <ButtonText title='Excluir Nota' />

            <h1>Introdução ao Node.js</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultricies nisl eget purus malesuada pharetra. Nunc nec nunc vitae
              nulla malesuada dictum sit amet ut purus. Vivamus porttitor massa
              tellus, id varius ligula rhoncus quis. Praesent luctus mattis diam
              id euismod. Aenean commodo ultricies metus, sed dapibus massa
              placerat vel. Integer facilisis dapibus nisi, nec lobortis diam
              convallis in. Pellentesque vel lacus nisi. Phasellus sagittis quam
              purus, id lobortis neque elementum ac. Morbi rutrum neque ante, a
              faucibus mauris interdum eget. Cras at dictum ex. Curabitur felis
              sapien, finibus at metus at, rhoncus efficitur ligula. Duis
              pulvinar ligula eget magna rhoncus rutrum. Donec iaculis quam quis
              magna rhoncus varius. Morbi bibendum lorem tempor sagittis auctor.
            </p>

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
          </Content>
        </main>
      </Container>
    </>
  );
}
