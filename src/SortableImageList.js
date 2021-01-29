import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableImage from './SortableImage';

const SortableImageList = SortableContainer((props) => {
  const { images, setSelectedImage, deleteImage } = props;

  return (
    <div style={{ height: '100%' }}>
      {images.map((image, index) => (
        <SortableImage
          index={index}
          key={image.name}
          name={image.name}
          alt={image.name}
          imgSource={image.imgSource}
          setSelectedImage={setSelectedImage}
          deleteImage={() => deleteImage(image.name)}
        />
      ))}
    </div>
  );
});

export default SortableImageList;
