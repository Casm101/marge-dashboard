import styled from 'styled-components';

const sidePadding = 12.5;

export const StyledNavigation = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%; height: 10%;

  position: fixed;
  top: 0;
  z-index: 999999;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: #3367d6;
  padding: 1rem ${sidePadding}% 1rem ${sidePadding}%;

  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1rem;
  margin: 0 0 .5rem 0;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.8rem;
  margin: 0;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #4285f4;
  padding: 1rem ${sidePadding}% 1rem ${sidePadding}%;

  span {
    display: flex;
    gap: 1rem;

    a {
      height: 100%;
      
      &:hover {
        background-color: #5b94f5;
      }
    }
  }
`;