import React, { useState, useCallback } from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dropzone from './Dropzone';
import useStyles from './styles/NewImageFormStyles';

function NewImageForm(props) {
  const classes = useStyles();
  const { isFull, addNewImage } = props;
  const [files, setFiles] = useState([]);
  const [imgTitle, setImgTitle] = useState();

  const handleChange = (e) => {
    setImgTitle(e.target.value);
  };

  const handleSubmit = () => {
    addNewImage(files[0].preview, imgTitle);
    setImgTitle('');
    setFiles([]);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFiles((prevState) => [
          ...prevState,
          { imgSource: e.target.result, preview: URL.createObjectURL(file) }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div>
      <Dropzone
        onDrop={onDrop}
        accept={'image/*'}
        maxSize={400000}
        files={files}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          className={classes.imgTitleInput}
          placeholder='new image name'
          margin='normal'
          variant='filled'
          value={imgTitle}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <Button
          className={classes.addImageButton}
          variant='contained'
          type='submit'
          color='primary'
          style={{
            backgroundColor: isFull ? 'grey' : '#455a64'
          }}
          disabled={isFull}
        >
          {isFull ? 'Album is full' : 'Add new image'}
        </Button>
      </ValidatorForm>
      <Divider />
    </div>
  );
}

export default NewImageForm;
