import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WishlistsScreen from '../screens/WishlistsScreen';
import ProfilScreen from '../screens/ProfilScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const DiscoveryStack = createStackNavigator({
  Discovery: DiscoveryScreen,
});

DiscoveryStack.navigationOptions = {
  tabBarLabel: 'Discovery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-compass${focused ? '' : '-outline'}`
          : 'md-compass'
      }
    />
  ),
};

const WishlistsStack = createStackNavigator({
  Wishlists: WishlistsScreen,
});

WishlistsStack.navigationOptions = {
  tabBarLabel: 'Wishlists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart${focused ? '' : '-outline'}`
          : 'md-heart'
      }
    />
  ),
};

const ProfilStack = createStackNavigator({
  ProfilStack: ProfilScreen,
});

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  DiscoveryStack,
  WishlistsStack,
  ProfilStack,
});
