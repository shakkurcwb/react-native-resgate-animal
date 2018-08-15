import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginPage from './src/Login';
import HomePage from './src/Home';
import RegisterPage from './src/Register';
import EmergencyPage from './src/Emergency';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="login" component={LoginPage} title="Resgate Animal App" initial={true} />
          <Scene key="home" component={HomePage} title="Principal" />
          <Scene key="register" component={RegisterPage} title="Cadastrar" />
          <Scene key="emergency" component={EmergencyPage} title="Emergência" />
        </Scene>
      </Router>
    );
  }
}