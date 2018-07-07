var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'keystone-fs',
  'views': 'templates/views',
  'view engine': 'pug',
  'user model': 'User',
  'auto update': true,
  'auth': true,
});

keystone.set('routes', require('./routes'));
keystone.import('models');

keystone.start();
