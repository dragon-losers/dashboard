import React from 'react';

const Sidebar = (props) => {
  const { handleNewHackernews, handleNewDev, handleGithub } = props;
  return (
    <div className="sidebar">
      <ul>
        <button className="btn" onClick={() => handleNewHackernews()}>
          HackerNews
        </button>
        <button className="btn" onClick={() => handleNewDev()}>
          Dev.to
        </button>
        <button className="btn" onClick={() => handleGithub()}>
          Github
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
