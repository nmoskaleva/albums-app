import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  addImageButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '1rem',
    padding: '1rem',
    fontSize: '1rem'
  },
  imgTitleInput: {
    width: '100%',
    height: '70px'
  }
}));

export default useStyles;
