import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ApplicationComponent from '../components/ApplicationComponent';
import NotFoundComponent from '../components/NotFoundComponent';
import HomeComponent from '../components/HomeComponent';

import SettingsComponent from '../components/SettingsComponent';
import MapComponent from '../components/MapComponent';

const components = [HomeComponent,SettingsComponent,MapComponent];

const routes = (
  <Route name="ApplicationComponent" path="/" component={ApplicationComponent}>
    {components.map(function (component) {
        return (
        <Route name={component.config.name}
        path={component.config.path}
        component={component} key={component.config.name} />
      );
    })}
    <IndexRoute component={HomeComponent} name='home' key='home' />
    <Route path="*" name="404" component={NotFoundComponent}/>
  </Route>
);

module.exports = routes;
