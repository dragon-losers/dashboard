import React from 'react';

const HackerNewsItem = (props) => {
  const { title, url, author } = props;
  return (
    <div>
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <p>Author: {author}</p>
    </div>
  );
};

export default HackerNewsItem;
