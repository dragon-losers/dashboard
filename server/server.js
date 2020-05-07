const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const GithubRouter = require('./routers/GithubRouter.js');

const PORT = process.env.PORT || 3000;

const userController = require('./controllers/userController');
const widgetController = require('./controllers/widgetController');

app.use(cookieParser());
app.use(express.json());

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

app.post("/login", userController.getUser, (req, res) => {
  res.json(res.locals.user);
});

app.post('/user', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.user);
});

app.delete('/user', userController.deleteUser, (req, res) => {
    res.status(200).json(res.locals.user);
});

app.get('/widget', widgetController.getWidget, (req, res) => {
    res.status(200).json(res.locals.widget);
});

app.post('/widget', widgetController.createWidget, (req, res) => {
    res.status(200).json(res.locals.widget);
});

app.use("/github", GithubRouter);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
});

app.use("*", (err, req, res, next) => {
  res.send(err);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
