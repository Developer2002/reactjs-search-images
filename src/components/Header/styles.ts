import styled from 'styled-components';

export const Container = styled.header`
  background: var(--header);
`; 

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #f4f4f4;
  }

  .shopping-cart {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    cursor: pointer;

    p {
      font-size: 1rem;
      color: #f4f4f4;
    }
  }
`; 