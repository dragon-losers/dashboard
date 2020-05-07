import React, { useState } from "react";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Stonks from "./Stonks.jsx";
import AppTracker from "../containers/AppTracker";
import Calendar from "./Calendar.jsx";
import Notepad from "./Notepad";
import User from "./User.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

    height: "20rem",
    backgroundColor: "aliceblue",
    overflow: "scroll",
  },
}));

const Dashboard = (props) => {
  const [user, setUser] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <AppTracker />{" "}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Notepad />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Stonks />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Calendar />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <User layout={props.layout} user={user} setUser={setUser} />
          </Paper>
        </Grid>
        {props.layout}
      </Grid>
    </div>
  );
};
export default Dashboard;
