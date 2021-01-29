import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    cursor: 'pointer',
    '&:hover svg': { opacity: '1' }
  },
  previewImage: {
    height: '140px',
    width: '100%',
    borderRadius: '5px'
  },
  title: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem'
  },
  deleteIcon: {
    position: 'absolute',
    right: '0px',
    top: '0px',
    width: '20px',
    height: '20px',
    padding: '10px',
    color: 'white',
    backgroundColor: 'black',
    zIndex: '10',
    opacity: '0'
  }
}));

export default useStyles;
