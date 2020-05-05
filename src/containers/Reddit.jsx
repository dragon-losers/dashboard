import React, { useState } from 'react';
import SubReddit from '../components/SubReddit.jsx';

const Reddit = (props) => {
    const [search, setSearch] = useState('');
    const [subreddits, setSubreddits] = useState([]);
    const subredditComps = subreddits.map(
        (subreddit) => <SubReddit name={subreddit} />
    )


    return (
        <div className={"redditContainer"}>
            <input
                placeholder={"Subreddit"}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button onClick={() => {
                console.log("Clicked!");
                setSubreddits([...subreddits, search]);
                console.log(subreddits);
            }}>Add subreddit</button>
            <div className={"subreddits"}>{subredditComps}</div>
        </div>
    )
}

export default Reddit;