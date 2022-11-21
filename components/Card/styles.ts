import styled from "styled-components";


export const StyledCard = styled.div`

  position: relative;
  width: 100%;
  height: min-content;

  border-radius: .25rem;
  background-color: #2b2b2b;

  z-index: 1;

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .5rem; 
    right: -3px;

    border-radius: .15rem;
    background-color: #ff4685;
    z-index: 10;

    transition: all .3s;

    width: 3px;
    height: auto;

    p {
      visibility: hidden;
      margin: 0;

      span { font-size: .8rem }
    }
  }

  &:hover {
    .tag {
      width: auto;
      padding: .1rem .25rem;

      p { visibility: visible; }
    }
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: .5rem 1rem;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;

  background-color: #363636;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 1rem;
`;

