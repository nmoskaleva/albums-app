import { makeStyles } from '@material-ui/core/styles';
import sizes from './mediaQueries';
import background from './petros-koublis-akasa.jpg';

const useStyles = makeStyles(() => ({
  '@global': {
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
    fontFamily: 'JetBrains Mono, monospace',
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&h1': {
      fontSize: '2rem'
    }
  },
  title: {
    display: 'block',
    padding: '0 30px',
    color: 'black',
    height: '100%',
    '& h1': {
      fontSize: '2rem',
      marginBottom: 0,
      paddingBottom: 0
    },
    '& h2': {
      fontSize: '0.9rem',
      marginTop: 0,
      paddingTop: '4px'
    }
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  newButton: {
    margin: '2rem 1rem',
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'white'
    }
  },
  albums: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1.5rem',
    [sizes.down('m')]: {
      gridTemplateColumns: 'repeat(2,50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1,100%)',
      gridGap: '1rem'
    }
  }
}));

export default useStyles;
