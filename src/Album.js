import React, { useState } from 'react';
import arrayMove from 'array-move';
import useStyles from './styles/AlbumStyles';
import SortableImageList from './SortableImageList';
import UseLocalStorageState from './hooks/useLocalStorage';
import Navbar from './Navbar';
import Footer from './AlbumFooter';
import Modal from './Modal';

export default function Album(props) {
  const classes = useStyles();
  const { albumTitle } = props.album;
  const [images, setImages] = UseLocalStorageState(
    `${albumTitle} + images `,
    props.album.images
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setImages((images) => arrayMove(images, oldIndex, newIndex));
  };

  const deleteImage = (imgName) => {
    const newImageList = images.filter((img) => img.name !== imgName);
    setImages([...newImageList]);
  };

  return (
    <div className={classes.Album}>
      <Navbar />
      <div className={classes.images}>
        <SortableImageList
          useDragHandle
          setSelectedImage={setSelectedImage}
          images={images}
          deleteImage={deleteImage}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={10}
        />
      </div>
      {selectedImage && (
        <Modal image={selectedImage} setSelectedImage={setSelectedImage} />
      )}
      <Footer albumTitle={albumTitle} />
    </div>
  );
}
