import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home';
import WalletScreen from '../screens/Wallet';
import PayScreen from '../screens/Pay';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Wallet" component={WalletScreen} />
      <Screen name="Pay" component={PayScreen} />
    </Navigator>
  )
}

export default Tabs;