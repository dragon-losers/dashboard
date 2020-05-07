const { User } = require("../models/mongo");
module.exports = {
  createUser: async (req, res, next) => {
      console.log('hit controller');
    const { _id, name, username, password } = req.body;
    await User.findOne({
      username
    }).exec()
    .then(async user => {
        if (!user) {
            const newUser = new User({
                name: name,
                username,
                password,
                widgets: [],
            })
            await newUser.save()
            .then(user => {
              console.log(`New User Created!`);
              res.locals.user = (user);
            })
            .catch(err => {
                console.log(err);
                return next(err);
            });
        } else {
            res.locals.user = 'Username Already Taken!'
        }
    })
    .catch(err => {
        return next(err);
    })
    return next()
  },
  getUser: async (req, res, next) => {
      const { username, password } = req.body;
      await User.findOne({
          username,
          password,
      }).exec()
      .then(user => {
        //   console.log(user)
          res.locals.user = user;
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
    return next();
  },
  deleteUser: async (req, res, next) => {
      const { _id } = req.body;
      await User.deleteOne({
          _id,
      })
      .then(response => {
          console.log('User Deleted!');
          res.json(response);
      })
      .catch(err => {
          console.log(err);
          return next(err);
      });
      return next();
  }
}
