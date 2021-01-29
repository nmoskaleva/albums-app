import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.7)',
    '& img': {
      display: 'block',
      maxWidth: '60%',
      maxHeight: '80%',
      margin: '60px auto',
      boxShadow: '3px 5px 7px rgba(255,255,255,.5)',
      border: '3px solid white'
    },
    imgTitle: {}
  }
}));

export default useStyles;
