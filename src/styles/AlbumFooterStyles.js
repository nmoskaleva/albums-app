import { makeStyles } from '@material-ui/core/styles';
import { BACKGROUND_COLOR } from '../constants';

const background = BACKGROUND_COLOR;

const useStyles = makeStyles(() => ({
  Footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '5vh',
    backgroundColor: background,
    paddingRight: '6px'
  }
}));

export default useStyles;
