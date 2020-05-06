import React from 'react';

const Sidebar = (props) => {
  const { handleNewHackernews, handleNewDev } = props;
  return (
    <div className="sidebar">
      <ul>
        <button className="btn" onClick={() => handleNewHackernews()}>
          HackerNews
        </button>
        <button className="btn" onClick={() => handleNewDev()}>
          Dev.to
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
