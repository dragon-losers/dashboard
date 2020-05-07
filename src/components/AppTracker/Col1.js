import React from 'react';

const Col1 = (props) => {
  return (
    <div id={props.id}>
      <p>{props.text}</p>
      <button onClick={(e) => props.delete(e.target.parentNode.id)}>
        Delete
      </button>
      <button
        onClick={(e) =>
          props.add(
            e.target.parentNode.id,
            e.target.parentNode.children[0].innerText
          )
        }
      >
        Move to Scheduled
      </button>
    </div>
  );
};
export default Col1;
