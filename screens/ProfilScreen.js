import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class ProfilScreen extends React.Component {
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
