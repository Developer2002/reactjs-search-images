import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useImages } from '../../hooks/useImages';

import { Container, OrderByLabel } from './styles';

interface Image {
  id: number;
  webformatURL: string;
  tags: string;
  downloads: number;
}

export function ListImages() {
  const [selected, setSelected] = useState("");
  const { images, totalHits, search, addSelectedImages, sortImagesRandomly, sortImagesByDownloads } = useImages();
  const notify = () => toast("Imagem adicionada");

  function handleAddSelectedImages(image: Image) {
    addSelectedImages(image);
    notify();
  }

  function handleOrderImages(label: string) {
    setSelected(label);

    switch(label) {
      case 'aleatory':
        sortImagesRandomly();
        break;
      case 'downloads':
        sortImagesByDownloads();
        break;
    }
  }

  return (
    <Container>
      <h3>Imagens de {search}</h3>
        <p>{totalHits} imagens</p>

        <div className="order-by-container">
          <strong>Ordernar por</strong>

          <OrderByLabel selected={selected === 'downloads'} onClick={() => handleOrderImages("downloads")}>
            Downloads
          </OrderByLabel>

          <OrderByLabel selected={selected === 'aleatory'} onClick={() => handleOrderImages("aleatory")}>
            Aleatório
          </OrderByLabel>
        </div>

      <section>
       {
         images.map(image => 
          <article key={image.id} onClick={() => handleAddSelectedImages(image)}>
            <img src={image.webformatURL} alt="Imagem" />
            <div className="image-details">
              <p>{image.tags}</p>
            </div>
          </article> 
         )
        }
      </section>

      <ToastContainer />
    </Container>
  )
}