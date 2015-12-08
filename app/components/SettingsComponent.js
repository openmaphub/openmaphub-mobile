import React, { Component } from 'react';

export default class SettingsComponent extends Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  onChange = () => {
    this.setState({});
  }
 //show form using list of presets
  render() {
    return (
      <div>
       <p>Settings Component</p>
      </div>
    );
  }
}

SettingsComponent.config = {name: 'settings', title: 'Settings', path: 'settings'};
