import React from 'react';
import { useDropzone } from 'react-dropzone';
import useStyles from './styles/DropzoneStyles';

export default function ImgDropzone({ onDrop, files }) {
  const classes = useStyles();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  const thumbs = files.map((file) => (
    <div className={classes.thumb} key={file.name}>
      <div className={classes.thumbInner}>
        <img src={file.preview} className={classes.img} alt='' />
      </div>
    </div>
  ));

  return (
    <section className='container'>
      <div className={classes.dropzone} {...getRootProps()}>
        <input {...getInputProps({ multiple: false })} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className={classes.thumbsContainer}>{thumbs}</aside>
    </section>
  );
}
