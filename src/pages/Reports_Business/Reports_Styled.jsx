import styled from "styled-components";

export const Conteiner = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Chartsmonthly = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45%;
  background: var(--color-white);
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 1rem;
  padding: 1rem;

  h1{
    margin: 1rem;
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
`
