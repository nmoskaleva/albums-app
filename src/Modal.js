import React from 'react';
import useStyles from './styles/ModalStyles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Modal({ image, setSelectedImage }) {
  const classes = useStyles();

  const handleCLickAway = () => {
    setSelectedImage(null);
  };

  return (
    <div className={classes.backdrop}>
      <ClickAwayListener onClickAway={handleCLickAway}>
        <img className={classes.img} src={image} alt={image.name} />
      </ClickAwayListener>
    </div>
  );
}
