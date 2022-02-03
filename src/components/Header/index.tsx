
import { useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';

import { useImages } from '../../hooks/useImages';

import { ImagesSelectedModal } from '../ImagesSelectedModal';

import { Container, Content } from './styles';

export function Header() {
  const { selectedImages } = useImages();
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false);

  function handleOpenShoppingCartModal () {
    setIsShoppingCartModalOpen(true);
  }

  function handleCloseShoppingCartModal() {
    setIsShoppingCartModalOpen(false);
  }

  return (
    <>
      <Container>
        <Content>
          <h3>Zaelo</h3>
            
          <div className="shopping-cart" onClick={handleOpenShoppingCartModal}>
            <BsFillCartFill color='#f4f4f4' size={18} />
            <p>{selectedImages.length} itens</p>
          </div>
        </Content>
      </Container>

      <ImagesSelectedModal
        isOpen={isShoppingCartModalOpen}
        onRequestClose={handleCloseShoppingCartModal}
      />
    </>
  );
}