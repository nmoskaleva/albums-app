import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AlbumMetaForm from './NewAlbumMetaForm';
import useStyles from './styles/NewAlbumFormNavStyles';

export default function NewAlbumFormNav(props) {
  const classes = useStyles();
  const { open, saveAlbum, images } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='default'
            aria-label='open drawer'
            onClick={props.handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon color='secondary' />
          </IconButton>
          <Typography variant='h6' noWrap>
            ADD IMAGES
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Button className={classes.button}>
            <AlbumMetaForm saveAlbum={saveAlbum} images={images} />
          </Button>
          <Link to='/'>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
            >
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}
