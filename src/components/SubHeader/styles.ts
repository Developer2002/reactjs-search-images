import styled from 'styled-components';

export const Container = styled.form`
  max-width: 1120px;
  margin: 1rem auto;

  padding: 1rem;

  input {
    font-size: 1rem;
    font-weight: 400;

    width: 100%;
    height: 2.8rem;

    padding: 0 1.5rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: #f5f5f5;

    &&::placeholder {
      color: var(--text-body);
    }
  }
`; 