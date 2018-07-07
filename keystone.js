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

keystone.import('models');
keystone.set('routes', require('./routes'));

keystone.start();
