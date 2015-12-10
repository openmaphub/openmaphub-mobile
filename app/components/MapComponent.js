import React, { Component } from 'react';
//import {connector} from 'reflux-state-mixin';
var MapStore = require('../stores/MapStore');
var MapActions = require('../actions/MapActions');
//var MapStore = require('../stores/MapStore');
import mapboxgl from '../../node_modules/mapbox-gl/dist/mapbox-gl-dev';
import mapboxLight from '../../node_modules/mapbox-gl-styles/styles/light-v8.json';


mapboxLight.sprite = '/omh-mobile-sprites'


//@connector(MapStore)
 class MapComponent extends Component {

  constructor () {
    super();
    this.state = MapStore.state;
  }

  onStatusChange(status) {
    var localState = {};
    for(var key in MapStore.getInitialState()){
      localState[key] = status[key];
    }
    this.setState(localState);
  }


  componentDidMount() {

    var _this = this;

    this.unsubscribe = MapStore.listen(this.onStatusChange, this);

    this.createMap();

    if(this.state.addingFeature){
      if(this.state.addFeaturePosition){
        //resume previous editing session
        this.map.on('style.load', function () {
          _this.addFeatureMarker();
        });

      }else{
        console.error('map state error: reseting map');
        MapActions.reset();
      }

    }else{
      //zoom map to device location
      this.geolocation();
    }


  }

  componentWillUnmount() {
    //remove map
    this.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.zoom !== prevState.zoom || this.state.center !== prevState.center){
      this.map.flyTo({center: this.state.center, zoom: this.state.zoom});
    }

    if(this.state.addingFeature && !prevState.addingFeature){
      this.addFeatureMarker();
    }

  }

  geolocation(){
    navigator.geolocation.getCurrentPosition(this.geolocationUpdate.bind(this), this.geolocationError.bind(this),
      {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});
  }

  geolocationUpdate(position){
    MapActions.setPosition({
      timestamp: position.timestamp,
      coords: {
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed
      }
    });
    MapActions.flyTo({center: [position.coords.longitude, position.coords.latitude], zoom: 13});
  }

  geolocationError(error){
    console.error(error);
  }

  addFeatureMarker(){
    // Add marker data as a new GeoJSON source.
   this.map.addSource("addFeature", {
       "type": "geojson",
       "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<div class=\"marker-title\">New Feature</div>",
                        "id": "-1",
                        "marker-symbol": "add_location-48"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [this.state.addFeaturePosition.coords.longitude,  this.state.addFeaturePosition.coords.latitude]
                    }
                }
                ]
              }
   });

   // Add a layer showing the markers.
   this.map.addLayer({
       "id": "addFeature",
       "interactive": true,
       "type": "symbol",
       "source": "addFeature",
       "layout": {
           "icon-image": "{marker-symbol}"
       }
   });
  }



  createMap() {
    var _this = this;
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd2Rjb3ZlciIsImEiOiI3akYtNERRIn0.uwBAdtR6Zk60Bp3vTKj-kg';


    var map = new mapboxgl.Map({
      container: 'map-component',
      style: mapboxLight,
      zoom: this.state.zoom,
      center: this.state.center
    });

    map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

    this.map = map;
  }


  render() {
    return (
       <div id="map-component"></div>
    );
  }
}

export default MapComponent

MapComponent.config = {name: 'map', title: 'Map', path: 'map'};
