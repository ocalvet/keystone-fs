const keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.get('/api/event', (req, res, next) => {
		const Event = keystone.list('Event');
    Event
      .model
			.find()
			// .where('state', 'published')
			// .sort('-publishedDate')
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};