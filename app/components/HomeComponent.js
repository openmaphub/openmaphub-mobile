import React, { Component } from 'react';

export default class HomeComponent extends Component {
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

  render() {
    return (
      <div>
       <h1>Home Component</h1>
      </div>
    );
  }
}

HomeComponent.config = {name: 'home', title: 'Home', path: 'home'};
