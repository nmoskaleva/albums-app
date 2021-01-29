import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from 'react-router-dom';
import arrayMove from 'array-move';
import SortableImageList from './SortableImageList';
import NewAlbumFormNav from './NewAlbumFormNav';
import NewImageForm from './NewImageForm';
import useStyles from './styles/NewAlbumFormStyles';

//add validation for unique album name!
export default function NewAlbumForm(props, { maxImg = 20 }) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  //transfering to App.js
  const [images, setImages] = useState([]);

  const isFull = images.length >= maxImg;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewImage = (imgFile, title) => {
    const newImage = { imgSource: imgFile, name: title };
    setImages([...images, newImage]);
  };

  const saveAlbum = (title) => {
    const newAlbum = {
      images: [...images],
      albumTitle: title,
      id: title.toLowerCase().replace(/ /g, '-')
    };
    props.saveAlbum(newAlbum);
    history.push('/');
  };

  const deleteImage = (imgTitle) => {
    const newImgList = images.filter((image) => image.name !== imgTitle);
    setImages([...newImgList]);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setImages((images) => arrayMove(images, oldIndex, newIndex));
  };

  const clearAll = () => {
    setImages([]);
  };

  const getRandomImage = () => {
    const allImages = props.albums.map((album) => album.images).flat();
    let index = Math.floor(Math.random() * allImages.length);
    const randomImg = allImages[index];
    setImages([...images, randomImg]);
  };

  return (
    <div className={classes.root}>
      <NewAlbumFormNav
        saveAlbum={saveAlbum}
        handleDrawerOpen={handleDrawerOpen}
        images={images}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerContainer}>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              className='button'
              color='secondary'
              onClick={clearAll}
            >
              Clear album
            </Button>
            <Button
              variant='contained'
              className='button'
              color='primary'
              onClick={getRandomImage}
            >
              Random Image
            </Button>
          </div>
          <NewImageForm
            isFull={isFull}
            images={images}
            addNewImage={addNewImage}
          />
        </div>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        <SortableImageList
          useDragHandle
          images={images}
          deleteImage={deleteImage}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={10}
        />
      </main>
    </div>
  );
}
