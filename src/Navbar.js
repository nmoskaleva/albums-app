import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useStyles from './styles/NavbarStyles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.Navbar}>
      <Link className={classes.back} to='/'>
        <ArrowBackIcon />
      </Link>
    </div>
  );
};

export default Navbar;
