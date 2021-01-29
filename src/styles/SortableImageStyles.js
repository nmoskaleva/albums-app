import { makeStyles } from '@material-ui/core/styles';
import sizes from './mediaQueries';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    width: '20%',
    height: '25%',
    margin: '0 auto',
    cursor: 'pointer',
    marginBottom: '-5px',
    overflow: 'hidden',
    '& svg': { opacity: '0', marginBottom: 0 },
    '&:hover svg': {
      opacity: '1',
      color: 'white',
      transform: 'scale(1.2)'
    },
    [sizes.down('l')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('m')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%'
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '5px',
    fontSize: '0.6rem',
    letterSpacing: '0.8px',
    color: 'rgba(0,0,0,0.5)'
  },
  img: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    flexShrink: 0,
    minWidth: '100%',
    minHeight: '100%'
  },
  deleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: 'all ease in-out',
    marginRight: '10px'
  }
}));

export default useStyles;
