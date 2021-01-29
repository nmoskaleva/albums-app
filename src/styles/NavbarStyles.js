import { makeStyles } from '@material-ui/core/styles';
import { BACKGROUND_COLOR } from '../constants';

const background = BACKGROUND_COLOR;

const useStyles = makeStyles(() => ({
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    backgroundColor: background
  },

  back: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    padding: '0 13px',
    fontSize: '0.8rem',
    marginRight: '15px',
    '& svg': {
      textdecoration: 'none',
      color: 'black'
    }
  }
}));

export default useStyles;
