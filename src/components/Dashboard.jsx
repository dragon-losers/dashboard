import React from 'react';
import { Paper, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '15em',
    backgroundColor: 'aliceblue',
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Notepad</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Top 10 Links</Paper>
        </Grid>
        {props.layout}
      </Grid>
    </div>
  );
};
export default Dashboard;
