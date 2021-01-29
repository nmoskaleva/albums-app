import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AlbumPreview from './AlbumPreview';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import useStyles from './styles/AlbumListStyles';

const AlbumList = React.memo((props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const { albums, deleteAlbum } = props;

  const goToAlbum = useCallback((id) => props.history.push(`/album/${id}`), [
    props.history
  ]);

  const openDialog = useCallback((id) => {
    setOpen(true);
    setDeleteId(id);
  }, []);

  const closeDialog = () => {
    setOpen(false);
    setDeleteId('');
  };

  const handleDelete = () => {
    deleteAlbum(deleteId);
    closeDialog();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <div className={classes.title}>
            <h1>ALBUMS</h1>
            <h2>React app for images</h2>
          </div>
          <Button
            variant='contained'
            color='primary'
            className={classes.newButton}
          >
            <Link to='/album/new'>New Album</Link>
          </Button>
        </nav>
        <TransitionGroup className={classes.albums}>
          {albums.map((album) => (
            <CSSTransition key={album.id} classNames='fade' timeout={500}>
              <AlbumPreview
                albumTitle={album.albumTitle}
                preveiwImage={album.images[0].imgSource}
                key={album.id}
                id={album.id}
                handleClick={goToAlbum}
                openDialog={openDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby='delete-dialog-title'
      >
        <DialogTitle id='delete-dialog-title'>Delete?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Delete' />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar
                style={{ backgroundColor: green[100], color: green[600] }}
              >
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Cancel' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
});

export default AlbumList;
