import React, { Component } from 'react';
import mapboxgl from '../../node_modules/mapbox-gl/dist/mapbox-gl-dev';
import mapboxLight from '../../node_modules/mapbox-gl-styles/styles/light-v8.json';

export default class MapComponent extends Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.createMap();

    this.geolocation();
  }

  componentWillUnmount() {
    //remove map
  }

  geolocation(){
    navigator.geolocation.getCurrentPosition(this.geolocationUpdate.bind(this), this.geolocationError.bind(this),
      {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});
  }

  geolocationUpdate(position){
    this.setState({position});
    this.map.flyTo({center: [position.coords.longitude, position.coords.latitude], zoom: 13});
  }

  geolocationError(error){
    console.error(error);
  }



  createMap() {
    var _this = this;
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd2Rjb3ZlciIsImEiOiI3akYtNERRIn0.uwBAdtR6Zk60Bp3vTKj-kg';


    var map = new mapboxgl.Map({
      container: 'map-component',
      style: mapboxLight,
      zoom: 0,
      center: [0,0]
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

MapComponent.config = {name: 'map', title: 'Map', path: 'map'};
