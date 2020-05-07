import React, { useState } from 'react';
import SubReddit from '../components/SubReddit.jsx';

const Reddit = (props) => {
    const [search, setSearch] = useState('');
    const [subreddit, setSubreddit] = useState('');

    return (
        <div className={"redditContainer"}>
            <input
                placeholder={"Subreddit"}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button onClick={() => setSubreddit(search)}>Add subreddit</button>
            <SubReddit name={subreddit} />
        </div>
    )
}

export default Reddit;