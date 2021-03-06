import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from '../actions/MapActions';
//var request = require('superagent');
var debug = require('../services/debug')('stores/MapStore');
//var _ = require('lodash');
//var $ = require('jquery');
//var config = require('../config');

module.exports = Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,

  getInitialState() {
    return this.restoreState();
  },

  restoreState(){
    var state = this.getDefaultState();
    //restore values from local state, if present
    Object.keys(state).map(function (key) {
      var val = localStorage.getItem('mapstore-' + key);
      if(val && val !== 'undefined'){
        val = JSON.parse(val);
        state[key] = val;
      }
    });
    return state;
  },

  getDefaultState() {
    return  {
      position: null, //geolocation position object
      zoom: 0, //map zoom
      center: [0,0], //map center
      addingFeature: false, //flag for adding feature mode
      addFeaturePosition: null, //map feature position, when adding
      selectedFeature: null,
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
      localStorage.setItem('mapstore-' + key, JSON.stringify(val));
    });
    this.setState(data);
    this.trigger(this.state);
  },

 //listeners
 loadLayer(data){
   this.setStatePersistent({
     data
   });
 },

 addFeature(){
   this.setStatePersistent({
     addingFeature: true,
     addFeaturePosition: this.state.position
   });
 },

selectFeature(){

},

setPosition(position){
  this.setStatePersistent({position});
},

flyTo(data){
  this.setStatePersistent({
    zoom: data.zoom,
    center: data.center
  });
},

 reset(){
   this.setStatePersistent({
     position: null, //geolocation position object
     addingFeature: false, //flag for adding feature mode
     addFeaturePosition: null, //map feature position, when adding
     selectedFeature: null,
     data: null //map layer GeoJSON data
    });
 }

});
