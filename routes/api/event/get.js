var keystone = require('keystone');
var Event = keystone.list('Event');

module.exports = function (req, res) {
  Event.model
    .find()
    // .where('state', 'published')
    // .sort('-publishedDate')
    .exec(function (err, results) {
      if (err) throw err;
      res.json(results);
    });
}