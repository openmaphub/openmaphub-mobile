import React, { Component } from 'react';
import {Link} from 'react-router';
import ApplicationActions from '../actions/ApplicationActions';
import $ from 'jquery';

export default class ApplicationComponent extends Component {

  componentDidMount(){
    $('.button-collapse').sideNav();
  }

  render() {
    return <div>
        <header>
            <nav>
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo">OpenMapHub</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>
              </div>
            </nav>
        </header>
        <section id='main' className='content'>
          {this.props.children}
        </section>
        <footer className='bar bar-tab'>
          <Link className='tab-item' to="/home">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </Link>
        </footer>
     </div>;
  }
};
