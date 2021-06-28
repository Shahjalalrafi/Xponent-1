import Image from 'next/image'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import nav from '../public/images/nav.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav : {
    background: '#EB5646'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    fontWeight: '600',
    margin: '0 20px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Image src={nav} width={200} height={50} alt='contentStack'/>
          </Typography>
          <Button className={classes.btn} color="inherit">Product</Button>
          <Button className={classes.btn} color="inherit">Resources</Button>
          <Button className={classes.btn} color="inherit">Customers</Button>
          <Button className={classes.btn} color="inherit">Partners</Button>
          <Button className={classes.btn} color="inherit">Company</Button>
          <Button className={classes.btn} color="inherit">RequestDemo</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}