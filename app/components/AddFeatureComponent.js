import React, { Component } from 'react';

export default class AddFeatureComponent extends Component {
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
       <p>Add Feature Component</p>
      </div>
    );
  }
}

AddFeatureComponent.config = {name: 'add', title: 'Add', path: 'add'};
