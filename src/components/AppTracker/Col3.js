import React from 'react';

const Col3 = (props) => {
  return (
    <div id={props.id}>
      <p>{props.text}</p>
      <button onClick={(e) => props.delete(e.target.parentNode.id)}>
        Delete
      </button>
    </div>
  );
};
export default Col3;
