import { useState, FormEvent } from 'react';

import { useImages } from '../../hooks/useImages';

import { Container } from './styles';

export function SubHeader() {
  const [query, setQuery] = useState('');

  const { getImages } = useImages();

  async function handleSearchImages(event: FormEvent) {
    event.preventDefault();
    
    await getImages(query);
  }

  return (
    <Container onSubmit={handleSearchImages}>
      <input
        type="text"
        placeholder="Ex: rodas"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
    </Container>
  );
}