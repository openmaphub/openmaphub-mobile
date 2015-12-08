import Reflux from 'reflux';

var actions = Reflux.createActions({
  'openLayer': {}, //open layer from OpenMapHub and save for offline editing
  'addFeature': {}, //add a feature to the layer
  'editFeature': {}, //edit attriubtes of a selected map feature
  'attachPhoto': {}, //attach a photo to a feature
  'syncLayer': {} //sync layer
});

module.exports = actions;
