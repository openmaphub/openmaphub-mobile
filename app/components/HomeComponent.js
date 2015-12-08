import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import Map from './MapComponent';


export default class HomeComponent extends Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount() {
    $('ul.tabs').tabs();
  }

  componentDidUpdate(){
    window.dispatchEvent(new Event('resize'));
  }

  componentWillUnmount() {

  }

  onChange = () => {
    this.setState({});
  }

  render() {
    return (
      <div className="row" style={{height: '100%', marginBottom: 0}}>
          <div className="col s12" style={{padding: 0}}>
            <ul className="tabs">
              <li className="tab col s6">
                <a className="active" href="#map"><i className="material-icons small left tab-icon">map</i>Map</a>
              </li>
              <li className="tab col s6">
                <a href="#data"><i className="material-icons small left tab-icon">list</i>data</a>
              </li>

            </ul>
          </div>
          <div id="map" className="col s12">
            <Map />
          </div>
          <div id="data" className="col s12">
            <p>data</p>
          </div>
          <div className="fixed-action-btn" style={{bottom: '45px', right: '24px'}}>
            <a className="btn-floating btn-large red">
              <i className="large material-icons">add</i>
            </a>
          </div>
      </div>
    );
  }
}

HomeComponent.config = {name: 'home', title: 'Home', path: 'home'};
