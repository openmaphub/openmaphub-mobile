var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux);
var Actions = require('../actions/LayerActions');
//var request = require('superagent');
var debug = require('../services/debug')('stores/LayerStore');
//var _ = require('lodash');
//var $ = require('jquery');
//var config = require('../config');

module.exports = Reflux.createStore({
  mixins: [StateMixin],
  listenables: Actions,

  getInitialState() {
    return this.restoreState();
  },

  restoreState(){
    var state = this.getDefaultState();
    //restore values from local state, if present
    Object.keys(state).map(function (key) {
      var val = localStorage.getItem('layerstore-' + key);
      if(val){
        val = JSON.parse(val);
        state[key] = val;
      }
    });
    return state;
  },

  getDefaultState() {
    return  {
      layer_id: -1,
      name: null,
      description: null,
      source: null,
      license: null,
      data: null //map layer GeoJSON data
     };
  },

  resetData(){
    this.setStatePersistent(this.getDefaultState);
  },

  storeDidUpdate(){
    debug('store updated');
  },

  setStatePersistent(data){
    Object.keys(data).map(function (key) {
      var val = data[key];
      localStorage.setItem('layerstore-' + key, JSON.stringify(val));
    });
    this.setState(data);
    this.trigger(this.state);
  }

 //listeners

});
