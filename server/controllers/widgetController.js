const { Widget } = require('../models/mongo');
module.exports = {
  createWidget: async (req, res, next) => {
      const { cat, subcat } = req.body;
      const newWidget = new Widget({
          cat: cat,
          subCat: subcat,
      });
      await newWidget.save()
      .then(widget => {
          res.locals.widget = widget;
          console.log('New Widget Created!');
      })
      .catch(err => {
          console.log(err);
          return next(err);
      });
      return next();
  },
  getWidget: async (req, res, next) => {
      const { cat, subcat } = req.body;
      await Widget.findOne({
          cat: cat,
          subCat: subcat,
      }).exec()
      .then(widget => {
          res.locals.widget = widget;
          console.log('Caught the Widget!');
      })
      .catch(err => {
          console.log(err);
          return next(err);
      });
      return next();
  }
}