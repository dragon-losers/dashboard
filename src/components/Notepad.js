import React, { useState } from 'react';

const Notepad = (props) => {
  const [text, setText] = useState('');

  return (
    <textarea
      className="notepad"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
export default Notepad;
