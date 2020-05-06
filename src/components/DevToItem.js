import React from 'react';

const DevToItem = (props) => {
  const { title, image, link } = props;
  const imgStyle = {
    width: '80%',
  };
  return (
    <div>
      <a href={link}>
        <h2>{title}</h2>
        {title}
      </a>
      <img src={image} alt={title} style={imgStyle} />
    </div>
  );
};
export default DevToItem;
