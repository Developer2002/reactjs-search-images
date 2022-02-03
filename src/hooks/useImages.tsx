import { createContext, useContext, useState, ReactNode  } from 'react';

import { api } from '../services/api';

interface ResponseGetImages {
  totalHits: number;
  hits: Image[];
}

interface Image {
  id: number;
  webformatURL: string;
  tags: string;
  downloads: number;
}

interface ImagesProviderProps {
  children: ReactNode;
}

interface ImagesContextData {
  images: Image[];
  totalHits: number;
  search: string;
  getImages: (query: string) => Promise<void>;
  
  selectedImages: Image[];
  addSelectedImages: (image: Image) => void;
  deleteProduct: (productPosition: number) => void;

  sortImagesRandomly: () => void;
  sortImagesByDownloads: () => void;
}

const ImagesContext = createContext<ImagesContextData>({} as ImagesContextData);

export function ImagesProvider({ children }: ImagesProviderProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [search, setSearch] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  const [selectedImages, setSelectedImages] = useState<Image[]>([]);

  async function addSelectedImages(product: Image) {
    setSelectedImages([...selectedImages, product]);
  }

  async function getImages(query: string) {
    const params = `?key=22544243-fee91cb211d1493ce0b20a24e&q=${query}&image_type=photo`;
    const response = await api.get<ResponseGetImages>(params);

    const randomizeImages = response.data.hits.sort(() => Math.random() - 0.5);

    setTotalHits(response.data.hits.length);
    setSearch(query);
    setImages(randomizeImages);
  }

  function sortImagesRandomly() {
    const sortImages = images.sort(() => Math.random() - 0.5);

    const newImages = sortImages.map(image =>  {
      return {...image, hackUpdateMap: Math.floor(Math.random() * 10)}
    })
    setImages(newImages);
  }
  
  function sortImagesByDownloads() {
    function toCompare(a: Image, b: Image) {
      if (a.downloads > b.downloads) {
        return -1;
      }
      if (a.downloads < b.downloads) {
        return 1;
      }

      return 0;
    }

    images.sort(toCompare).map(item => console.log(item.downloads));

    setImages(images.sort(toCompare));
  }

  function deleteProduct(imageIndex: number) {
    const deleteProduct = selectedImages.filter((image, index) => index !== imageIndex);
    setSelectedImages(deleteProduct);
  }

  return (
    <ImagesContext.Provider value={{
      images,
      search,
      totalHits,
      getImages,
      selectedImages,
      addSelectedImages,
      deleteProduct,
      sortImagesRandomly,
      sortImagesByDownloads
    }}>
      {children}
    </ImagesContext.Provider>
  );
}

export function useImages() {
  const context = useContext(ImagesContext);

  return context;
}