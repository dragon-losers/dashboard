import React from 'react';
import { Paper, Grid, makeStyles } from '@material-ui/core';
import Stonks from './Stonks.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    height: '15rem',
    backgroundColor: 'aliceblue',
    overflow: 'scroll',
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>(these ones -- also big!)</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Stonks />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>our small citizens ...</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>our small citizens ...</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>our small citizens ...</Paper>
        </Grid>
        {props.layout}
      </Grid>
    </div>
  );
};
export default Dashboard;
