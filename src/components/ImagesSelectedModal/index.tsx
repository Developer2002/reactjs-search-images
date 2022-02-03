import Modal from 'react-modal';

import { MdDelete } from 'react-icons/md';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

import { useImages } from '../../hooks/useImages';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ImagesSelectedModal({ isOpen, onRequestClose }: ModalProps) {
  const { selectedImages, deleteProduct } = useImages();

  function handleDeleteProduct(productPosition: number) {
    deleteProduct(productPosition);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <h2>Imagens selecionadas</h2>

      <Container>
        { selectedImages.length >= 1 ? selectedImages.map((image, index) =>
          <article key={index}>
            <div className="product-info">
              <img src={image.webformatURL} alt="" />
              <div>
                <p>Nome da imagem</p>
                <p className="price">{image.tags}</p>
              </div>
            </div>

            <div className="product-actions">
              <MdDelete
                onClick={() => handleDeleteProduct(index)}
                size={21}
                color="#323232"
                cursor="pointer"
              />
            </div>
          </article>  
        ): <p>Sem imagens selecionadas :(</p>}
      </Container>
    </Modal>
  )
}