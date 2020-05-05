import React, { useState, useEffect } from 'react';
import DevToItem from '../components/HackerNewsItem';

const DevTo = (props) => {
  const [tag, setTag] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = `https://dev.to/api/articles?tag=${tag}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      })
      .catch((err) => console.error(err));
  }, [tag]);

  let resultList = results.map((result) => (
    <DevToItem
      key={result.id}
      title={result.title}
      image={result.cover_image}
      user={result.user}
      link={result.canonical_url}
    />
  ));

  return (
    <div>
      <div>
        <label htmlFor="dev-to-select">Choose a tag</label>

        <select
          name="tags"
          id="dev-to-select"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="">--Choose an option--</option>
          <option value="architecture">Architecture</option>
          <option value="blockchain">Blockchain</option>
          <option value="cloud">Cloud</option>
          <option value="css">CSS</option>
          <option value="docker">Docker</option>
          <option value="frontend">Front End</option>
          <option value="git">Git</option>
          <option value="graphql">GraphQL</option>
          <option value="javascript">JavaScript</option>
          <option value="mongodb">MongoDB</option>
          <option value="node">Node</option>
          <option value="performance">Ferformance</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="sql">SQL</option>
          <option value="typescript">TypeScript</option>
          <option value="ux">UX</option>
        </select>
      </div>
      <div className="results">{resultList}</div>
    </div>
  );
};

export default DevTo;
