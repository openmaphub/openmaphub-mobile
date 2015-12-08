import Reflux from 'reflux';

var actions = Reflux.createActions({
  'setCountry': {}, //set the basemap country (downloads vector tile package)
  'setLanguage': {} //change UI language
});

module.exports = actions;
