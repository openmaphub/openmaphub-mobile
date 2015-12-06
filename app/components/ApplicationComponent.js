import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

export default class ApplicationComponent extends Component {

  componentDidMount(){
    $('.button-collapse').sideNav();
  }

  render() {
    return (
    <div>
        <header>
            <nav>
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo">OpenMapHub</a>
                <a href="#" data-activates="sidenav" className="button-collapse"><i className="material-icons">menu</i></a>

                <ul className="side-nav" id="sidenav">
                  <li>
                    <Link className='tab-item' to="/home">
                      <span className="icon icon-home"></span>
                      <span className="tab-label">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='tab-item' to="/home">
                      <span className="icon icon-home"></span>
                      <span className="tab-label">Layer</span>
                    </Link>
                  </li>
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
     </div>
   );
  }
}
