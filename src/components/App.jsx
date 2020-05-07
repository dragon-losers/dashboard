import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import Sidebar from './Sidebar.js';
import HackerNews from '../containers/HackerNews.js';
import DevTo from '../containers/DevTo.js';
import Github from '../containers/Github.jsx';
import Reddit from '../containers/Reddit.jsx';
import { Paper, Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import '../sass/styles.scss';

const App = (props) => {
  const [layout, setLayout] = useState([]);

  const handleGithub = () => {
    setLayout([
      ...layout,
      <Grid item xs={6} sm={3}>
        <Paper>
          <Github key={uuidv4()} />
        </Paper>
      </Grid>,
    ])
  }
  const handleNewHackernews = () => {
    setLayout([
      ...layout,
      <Grid item xs={6} sm={3}>
        <Paper>
          <HackerNews key={uuidv4()} />
        </Paper>
      </Grid>,
    ]);
  };

  const handleNewDev = () => {
    setLayout([
      ...layout,
      <Grid item xs={6} sm={3}>
        <Paper>
          <DevTo key={uuidv4()} />
        </Paper>
      </Grid>,
    ]);
  };

  const handleReddit = () => {
    setLayout([
      ...layout,
      <Grid item xs={6} sm={3}>
        <Paper>
          <Reddit key={uuidv4()} />
        </Paper>
      </Grid>,
    ])
  }
  // const add

  return (
    <div className="app">
      <Sidebar
        handleNewHackernews={handleNewHackernews}
        handleNewDev={handleNewDev}
        handleGithub={handleGithub}
        handleReddit={handleReddit}
      />
      <Dashboard layout={layout} />
    </div>
  );
};

export default App;
