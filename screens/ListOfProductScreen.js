import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet } from 'react-native';

export default class ListOfProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Profil',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return(
    <ScrollView style={styles.container}>
    </ScrollView>
    )
  }
}