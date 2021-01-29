import { makeStyles } from '@material-ui/core/styles';
import { BACKGROUND_COLOR } from '../constants';

const background = BACKGROUND_COLOR;

const useStyles = makeStyles(() => ({
  Album: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: background
  },
  images: {
    height: '90%'
  }
}));

export default useStyles;
