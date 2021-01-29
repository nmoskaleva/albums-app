import React from 'react';
import useStyles from './styles/AlbumFooterStyles';

const AlbumFooter = ({ albumTitle }) => {
  const classes = useStyles();
  return <footer className={classes.Footer}> {albumTitle}</footer>;
};

export default AlbumFooter;
