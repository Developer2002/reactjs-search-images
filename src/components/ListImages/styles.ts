import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`

  .order-by-container {
    display: flex;
    flex-direction: row;

    padding: 1.5rem 0 0 0;

    p {
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  position: relative;
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem;

  h2 {}

  p {
    color: var(--text-body);
  }

  section {
    margin-top: 2rem;

    column-count: 3;

    @media (max-width: 800px) {
      column-count: 2;
    }

    @media (max-width: 500px) {
      column-count: 1;
    }

    article {
      position: relative;

      border-radius: 0.03125rem;

      margin-bottom: 1rem;

      img {
        width: 100%;
        cursor: pointer;

        transition: opacity 0.5s;

        &:hover {
          opacity: 0.9;
        }
      }

      .image-details {
        position: absolute;

        display: flex;
        align-items: center;

        padding: 0 1rem;

        width: 100%;
        height: 2rem;

        bottom: 1rem;

        background-color: ${transparentize(0.6, '#fff')};

        cursor: pointer;

        p {
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
`;

export const ListImagesHeader = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface OrderByLabelProps {
  selected?: boolean;
}

export const OrderByLabel = styled.p<OrderByLabelProps>`
  font-weight: ${props => props.selected && 'bold'}
`;