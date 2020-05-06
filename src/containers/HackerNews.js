import React, { useState } from 'react';
import HackerNewsItem from '../components/HackerNewsItem';

const HackerNews = (props) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('relevance');
  const [results, setResults] = useState([]);
  const fetchQuery = () => {
    let url;
    if (search === 'relevance') {
      url = `http://hn.algolia.com/api/v1/search?query=${query}`;
    } else if (search === 'date') {
      url = `http://hn.algolia.com/api/v1/search_by_date?query=${query}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setResults(data.hits);
      })
      .catch((err) => console.error(err));
    setQuery('');
  };

  let resultList = results.map((result) => (
    <HackerNewsItem
      key={result.created_at_i}
      title={result.title}
      url={result.url}
      author={result.author}
    />
  ));

  return (
    <div className="hackernews">
      <input
        placeholder="Start typing..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div>
        <p>Search by...</p>
        <div>
          <input
            type="radio"
            id="relevance"
            name="hackernews"
            defaultChecked
            onClick={() => setSearch('relevance')}
          />
          <label htmlFor="relevance">Relevance</label>
        </div>
        <div>
          <input
            type="radio"
            id="date"
            name="hackernews"
            onClick={() => setSearch('date')}
          />
          <label htmlFor="date">Date</label>
        </div>
      </div>
      <button onClick={() => fetchQuery(query)}>Search</button>
      <div className="results">{resultList}</div>
    </div>
  );
};

export default HackerNews;
