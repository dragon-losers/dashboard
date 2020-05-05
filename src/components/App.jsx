import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import Sidebar from './Sidebar.js';
import HackerNews from '../containers/HackerNews.js';
import DevTo from '../containers/DevTo.js';

const App = (props) => {
  const [layout, setLayout] = useState([]);

  const handleNewHackernews = () => {
    setLayout([...layout, <HackerNews />]);
  };

  const handleNewDev = () => {
    setLayout([...layout, <DevTo />]);
  };

  // const add

  return (
    <div className="app">
      <Sidebar
        handleNewHackernews={handleNewHackernews}
        handleNewDev={handleNewDev}
      />
      <Dashboard hackernews={hackernews} dev={dev} />
    </div>
  );
};

export default App;
