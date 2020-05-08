import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Access from './Access';
import Signup from './Signup';

const App2 = StackNavigator({
  Home: { screen: Home },
  Access: { screen: Access },
  Signup:{screen:Signup},

}, {
    initialRouteName: 'Home'
});

export default App2;
