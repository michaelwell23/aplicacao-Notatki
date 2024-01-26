import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const Profile = styled(Link)`
  position: relative; /* Adicionado para posicionar corretamente o tooltip */
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`;

export const ProfileTooltip = styled.div`
  position: absolute;
  top: 80px; /* Ajuste para posicionar acima do perfil */
  left: 95%;
  transform: translateX(-50%);
  background-color: orange;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
`;
