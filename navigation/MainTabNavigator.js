import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WishlistsScreen from '../screens/WishlistsScreen';
import ProfilScreen from '../screens/ProfilScreen';

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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const HomeStack2 = createStackNavigator({
  Home: HomeScreen,
});

HomeStack2.navigationOptions = {
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
  HomeStack2,
  WishlistsStack,
  ProfilStack,
});
