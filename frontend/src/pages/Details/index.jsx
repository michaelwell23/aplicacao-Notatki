import { Container, Links, Content } from './styles';
import { useNavigate, useParams } from 'react-router-dom';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);

  const ṕarams = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${ṕarams.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <>
      <Container>
        <Header />

        {data && (
          <main>
            <Content>
              <ButtonText title='Excluir Nota' />

              <h1>{data.title}</h1>
              <p>{data.description}</p>

              {data.links && (
                <Section title='Links úteis'>
                  <Links>
                    {data.links.map((link) => (
                      <li key={String(link.id)}>
                        <a href={link.url} target='_blank'>
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}

              {data.tags && (
                <Section title='Marcadores'>
                  {data.tags.map((tag) => (
                    <Tag key={tag.id} title={tag.name} />
                  ))}
                </Section>
              )}

              <Button title='Voltar' onClick={handleBack} />
            </Content>
          </main>
        )}
      </Container>
    </>
  );
}
