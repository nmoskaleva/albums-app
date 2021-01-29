import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles/AlbumPreviewStyles';

const AlbumPreview = React.memo((props) => {
  const classes = useStyles();
  const { albumTitle, preveiwImage, id, handleClick, openDialog } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    openDialog(id);
  };

  const goToAlbum = () => {
    handleClick(id);
  };

  return (
    <div className={classes.root} onClick={goToAlbum}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: 'all 0.3s ease-in-out' }}
        onClick={handleDelete}
      />
      <div
        className={classes.previewImage}
        style={{ backgroundImage: `url(${preveiwImage})` }}
      ></div>
      <h5 className={classes.title}>{albumTitle}</h5>
    </div>
  );
});
export default AlbumPreview;
