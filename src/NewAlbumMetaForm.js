import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from './styles/NewAlbumFormNavStyles';

export default function FormDialog({ saveAlbum, images }) {
  const [open, setOpen] = useState(false);
  const [albumTitle, setAlbumTitle] = useState('');
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (e) => {
    setAlbumTitle(e.target.value);
  };

  const show = images.length > 0;

  return (
    <div>
      <div className={classes.navBtns}>
        {show && (
          <Button
            variant='contained'
            color='secondary'
            onClick={handleClickOpen}
            className={classes.button}
          >
            Save Album
          </Button>
        )}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        fullWidth
      >
        <DialogTitle id='form-dialog-title'>
          Choose your album name{' '}
        </DialogTitle>
        <ValidatorForm onSubmit={() => saveAlbum(albumTitle)}>
          <DialogContent>
            {/* <DialogContentText>a name should be unique</DialogContentText> */}
            <TextValidator
              label='Album Name'
              value={albumTitle}
              onChange={handleNameChange}
              validators={['required']}
              errorMessages={['please enter a name']}
              margin='normal'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='secondary' type='submit'>
              Save Album
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
