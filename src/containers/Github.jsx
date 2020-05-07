import React, { useState, useEffect } from 'react';
import GithubFeed from '../components/GithubFeed.jsx';
const github_clientID = '9b11b584e44ee5e25886';

const Github = (props) => {
    const [auth, getAuth] = useState(false);
    useEffect(() => {
        fetch('/github/get_token')
            .then((raw) => raw.json())
            .then((authed) => getAuth(authed));
    });

    const login = () => {
        const url = `https://github.com/login/oauth/authorize?client_id=${github_clientID}&scope=notifications`;
        window.location.assign(url);
    };

    return (
        <div className="github">
            {auth
                ? <GithubFeed />
                : <button onClick={() => login()}>Login to Github</button>
            }
        </div>
    )
}

export default Github;