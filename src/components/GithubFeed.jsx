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
            <h3><a href={notif.subject.url}>{notif.subject.title}</a></h3>
            <p>Type: {notif.subject.type}</p>
        </div>
    ))

    return (
        <div>
            {notifications}
        </div>
    );
}

export default GithubFeed;