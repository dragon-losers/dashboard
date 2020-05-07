const { User } = require("../models/mongo");
module.exports = {
  createUser: async (req, res, next) => {
    console.log("hit controller");
    const { name, username, password } = req.body;
    const newUser = new User({
      name: name,
      username: username,
      password: password,
      widgets: [],
    });
    await newUser
      .save()
      .then((user) => {
        console.log(`New User Created!`);
        res.locals.user = user;
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
    return next();
  },
  getUser: async (req, res, next) => {
    console.log("looking for user");
    const { username, password } = req.body;
    await User.findOne({
      username: username,
      password: password,
    })
      .exec()
      .then((user) => {
        console.log(user);
        res.locals.user = user;
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
    return next();
  },
};
