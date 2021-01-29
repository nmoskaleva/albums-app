import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  dropzone: {
    border: 'dashed grey 4px',
    backgroundColor: 'rgba(255,255,255,.8)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '30vh',
    marginTop: '15px'
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%'
  }
}));

export default useStyles;
