import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;

  > h1 {
    font-weight: bold;
    font-size: 50px;

    color: ${({ theme }) => theme.colors.text.black};
  }

  > svg {
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: -1;
    height: 100vh;
    width: auto;

    path {
      fill: rgba(0, 0, 0, 0.03);
    }
  }

  button {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.white};

    width: 50%;
    height: 50px;
    background: #0f6ac0;
    margin: 30px auto 0;

    outline: 0;
    border: 0;
    border-radius: 8px;
    opacity: 0.8;

    transition: all linear 0.2s;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  ${media.lessThan('large')`
    padding: 10px;
  `};
`;

export const Pokemons = styled.div`
  flex: 1;
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  ${media.lessThan('huge')`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 50px;
  `};
`;
