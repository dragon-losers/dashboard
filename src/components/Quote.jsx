import React, { useState, useEffect } from "react";

const Quote = (props) => {
  const [result, setResult] = useState({});
  useEffect(() => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((res) => setResult(res))
      .then(console.log(result));
  }, []);

  return (
    <div>
      <h3>{result.en}</h3>
      <p> - {result.author}</p>
    </div>
  );
};

export default Quote;
