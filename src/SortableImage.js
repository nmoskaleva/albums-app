import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement, sortableHandle } from 'react-sortable-hoc';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import useStyles from './styles/SortableImageStyles';

const SortableImage = SortableElement((props) => {
  const { name, setSelectedImage, deleteImage, imgSource } = props;
  const classes = useStyles();
  const DragHandle = sortableHandle(() => <DragIndicatorIcon />);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteImage();
  };

  return (
    <div className={classes.root} onClick={() => setSelectedImage(imgSource)}>
      <img className={classes.img} src={imgSource} alt={name} />
      <div className={classes.content}>
        <DragHandle />
        <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
});

export default SortableImage;
