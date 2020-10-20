import React, { useState, useCallback } from 'react';
import { default as PhotoGallery } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { GalleryImage } from '../../../../graphql/GetPost/GetPostQuery';

interface GalleryProps {
  gallery: GalleryImage[];
}

const Gallery = ({ gallery }: GalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <PhotoGallery
        onClick={openLightbox}
        photos={gallery.map(image => {
          return {
            src: image.url,
            height: image.height,
            width: image.width,
          };
        })}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={gallery.map(image => ({
                source: image.url,
                srcset: [],
                caption: image.caption,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Gallery;
