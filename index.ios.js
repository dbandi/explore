import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './app/containers/AppContainer';
import { Provider } from 'react-redux';
import reducer from './app/reducers'
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
)

AppRegistry.registerComponent('explore', () => App);
