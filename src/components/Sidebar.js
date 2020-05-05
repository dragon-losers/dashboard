import React from 'react';

const Sidebar = (props) => {
  const { handleNewHackernews, handleNewDev } = props;
  return (
    <div className="sidebar">
      <ul>
        <button onClick={() => handleNewHackernews()}>HackerNews</button>
        <button onClick={() => handleNewDev()}>Dev.to</button>
      </ul>
    </div>
  );
};

export default Sidebar;
