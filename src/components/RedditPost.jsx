import React from 'react';

const RedditPost = (props) => {
    const { title, url, author, imgURL } = props;
    return (<div
        className="redditPost"
    >
        <h3>
            <a href={url}>{title}</a>
        </h3>
        <img src={imgURL} />
        <p>Posted by: {author}</p>
    </div>)
}



export default RedditPost;