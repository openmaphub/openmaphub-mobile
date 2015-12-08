import Reflux from 'reflux';

var actions = Reflux.createActions({
  'login': {}, //oauth login to OpenMapHub
  'getLayers': {}, //get list of layers this user can edit
  'logout': {} //logout the current user
});

module.exports = actions;
