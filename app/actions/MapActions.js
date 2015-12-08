import Reflux from 'reflux';

var actions = Reflux.createActions({
  'loadLayer': {}, //show layer data on the map
  'addFeature': {}, //add a marker to the current GPS location
  'reset': {} //reset zoom/location
});

module.exports = actions;
