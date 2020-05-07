import React, { useState, useEffect } from 'react'
import RedditPost from './RedditPost.jsx'

const SubReddit = (props) => {
    const [posts, setPosts] = useState([]);

    const fetchSubreddit = () => {
        let url;
        if (props.name) url = `http://www.reddit.com/r/${props.name}/hot.json`;
        else url = 'http://www.reddit.com/hot';
        fetch(url)
            .then((raw) => raw.json())
            .then((results) => {
                setPosts(results.data.children);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchSubreddit();
    });

    let postList = posts.map((post) => (
        <RedditPost
            key={post.data.id}
            title={post.data.title}
            url={post.data.url}
            author={post.data.author}
            imgURL={post.data.thumbnail}
        />
    ));

    return (
        <div className={"subreddit"} key={props.name}>
            {postList}
        </div>
    )
}

export default SubReddit;