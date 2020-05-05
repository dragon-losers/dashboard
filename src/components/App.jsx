import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import Sidebar from './Sidebar.js';
import HackerNews from '../containers/HackerNews.js';
import DevTo from '../containers/DevTo.js';
import { v4 as uuidv4 } from 'uuid';

const App = (props) => {
  const [layout, setLayout] = useState([]);

  const handleNewHackernews = () => {
    setLayout([...layout, <HackerNews key={uuidv4()} />]);
  };

  const handleNewDev = () => {
    setLayout([...layout, <DevTo key={uuidv4()} />]);
  };

  // const add

  return (
    <div className="app">
      <Sidebar
        handleNewHackernews={handleNewHackernews}
        handleNewDev={handleNewDev}
      />
      <Dashboard layout={layout} />
    </div>
  );
};

export default App;
