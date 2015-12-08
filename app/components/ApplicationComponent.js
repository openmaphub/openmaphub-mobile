import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

export default class ApplicationComponent extends Component {

  componentDidMount(){
    $('.button-collapse').sideNav();
  }

  render() {
    return (
    <div id="app-container">
        <header>
            <nav className="white" style={{boxShadow: '0 0 1px rgba(0,0,0,0.7)'}}>
              <div className="nav-wrapper white">
                <a href="#!" className="brand-logo blue-grey-text text-darken-4">OpenMapHub</a>
                <a href="#" data-activates="sidenav" className="button-collapse blue-grey-text text-darken-3"><i className="material-icons">menu</i></a>

                <ul className="side-nav" id="sidenav">
                  <li>
                    <Link to="/sync">
                      <span><i className="material-icons side-nav-icon left">sync</i>Sync Changes<span className="badge right red-text" style={{lineHeight: 'inherit'}}>14</span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/home">
                      <span><i className="material-icons side-nav-icon left">home</i>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/home">
                      <span><i className="material-icons side-nav-icon left">layers</i>Change Layer</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings">
                      <span><i className="material-icons side-nav-icon left">settings</i>Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
        <section id='main' className='content'>
          {this.props.children}
        </section>
        <footer>
        </footer>
     </div>
   );
  }
}
