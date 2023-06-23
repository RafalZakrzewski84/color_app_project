import React from 'react';
import { withStyles } from '@mui/styles';
import styles from '../styles/PageStyles';

function Page({ children, classes }) {
  return <section className={classes.page}>{children}</section>;
}

export default withStyles(styles)(Page);
