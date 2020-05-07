const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const GithubRouter = require('./routers/GithubRouter.js');
const PORT = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express.json());

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.use('/github', GithubRouter);

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
