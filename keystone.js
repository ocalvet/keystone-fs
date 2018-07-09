require('dotenv').config();
const keystone = require('keystone');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

console.log('env', process.env);

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

// Start Next app
app
  .prepare()
  .then(() => {
    keystone.set('routes', require('./routes')(app));
    keystone.start();
  });
