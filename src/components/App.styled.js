import styled from '@emotion/styled';

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Quicksand', sans-serif;

  background-color: var(--background-section);
  color: white;

  transition: background-color 250ms linear;
`;

export const Container = styled.div`
  padding: 20px 30px;
  background-color: var(--background-card-box);
  border-radius: 6px;
  backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgb(0 0 0 / 20%);

  transition: background-color 250ms linear;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const DivList = styled.div`
  margin-top: 30px;
  padding: 20px 30px;
  width: 500px;
  z-index: 10;

  border-radius: 6px;
  backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgb(0 0 0 / 20%);
  background-color: var(--contact-list);

  transition: background-color 250ms linear;
`;
