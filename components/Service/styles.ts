import styled from "styled-components";

export const StyledServiceBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  min-width: 265px;
  width: 100%;
  
  cursor: pointer;

  .serviceData {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
      height: 50px;
    }

    .serviceName {
      font-size: 1.4rem;
      font-weight: 500;
      margin: 0;
    }

    .serviceInfo {
      margin: .25rem 0;
      font-weight: 300;
      text-overflow: ellipsis; 
    }
  }

  .serviceStatus {
    display: flex;
    align-items: center;
    gap: .5rem;

    margin-right: 1rem;;

    font-style: italic;
    font-weight: 300;

    .statusIndicator {
      width: 10px;
      height: 10px;
      border-radius: 1rem;
      background-color: #4285f4;

      &.true {
        background-color: #02f503;
      }

      &.false {
        background-color: #ff0000;
      }
    }
  }
`;