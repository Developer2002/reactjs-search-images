import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  article {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;

    .product-info {
      display: flex;
      align-items: center;

      p {
        margin-left: 1rem;
      }

      div {
        .price {
          margin-top: 0.5rem;
          color: var(--text-body);
        }
      }

      img {
        width: 5rem;
      }
    }

    .product-actions {
      display: flex;
      align-items: center;
    }
  }
`;