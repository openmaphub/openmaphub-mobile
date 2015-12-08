import React, { Component } from 'react';

export default class EditFeatureComponent extends Component {
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
       <p>Edit Feature Component</p>
      </div>
    );
  }
}

EditFeatureComponent.config = {name: 'edit', title: 'Edit', path: 'edit'};
