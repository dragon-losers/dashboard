import React, { useState, useEffect } from 'react';
import Col1 from '../components/AppTracker/Col1';
import Col2 from '../components/AppTracker/Col2';
import Col3 from '../components/AppTracker/Col3';
import { v4 as uuidv4 } from 'uuid';

const AppTracker = (props) => {
  const [input, setInput] = useState('');
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  // add new item to Column 1
  const addToCol1 = () => {
    setCol1([
      ...col1,
      <Col1
        key={uuidv4()}
        id={uuidv4()}
        text={input}
        delete={deleteFromCol1}
        add={addToCol2}
      />,
    ]);
    setInput('');
  };

  // move item from Column 1 to 2
  const addToCol2 = (id, text) => {
    setCol2([
      ...col2,
      <Col2
        key={uuidv4()}
        id={uuidv4()}
        text={text}
        delete={deleteFromCol2}
        add={addToCol3}
      />,
    ]);
    deleteFromCol1(id);
  };

  // move item from Column 2 to 3
  const addToCol3 = (id, text) => {
    setCol3([
      ...col3,
      <Col3 key={uuidv4()} id={uuidv4()} text={text} delete={deleteFromCol3} />,
    ]);
    deleteFromCol2(id);
  };

  // delete item from Column 1
  const deleteFromCol1 = (id) => {
    console.log(col1);
    setCol1(col1.filter((item) => item.id !== id));
  };

  // delete item from Column 2
  const deleteFromCol2 = (id) => {
    console.log(col2);
    setCol2(col2.filter((item) => item.id !== id));
  };

  // delete item from Column 3
  const deleteFromCol3 = (id) => {
    console.log(col3);
    setCol3(col3.filter((item) => item.id !== id));
  };

  return (
    <div className="app-tracker">
      <div className="col-1 column">
        <h2>New Submissions</h2>
        <div className="input-container">
          <input
            placeholder="Add an application"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addToCol1()}>Add</button>
        </div>

        <ul>{col1}</ul>
      </div>
      <div className="col-2 column">
        <h2>Interview Scheduled</h2>
        <ul>{col2}</ul>
      </div>
      <div className="col-3 column">
        <h2>Offer Received</h2>
        <ul>{col3}</ul>
      </div>
    </div>
  );
};

export default AppTracker;
