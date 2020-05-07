import React, { useState, useEffect } from "react";

const GithubFeed = (props) => {
    const [feed, setFeed] = useState([]);
    useEffect(() => {
        fetch('/github/notifications')
            .then(raw => raw.json())
            .then(notifs => {
                setFeed(notifs);
            })
    });


    const notifications = feed.map((notif) => (
        <div>
            <h3><a href={notif.repository.html_url}>{notif.subject.title}</a></h3>
            <p>
                Type: {notif.subject.type} <br />
                Repo: {notif.repository.full_name}
            </p>
        </div>
    ))

    return (
        <div className='feed'>
            {notifications}
        </div>
    );
}

export default GithubFeed;