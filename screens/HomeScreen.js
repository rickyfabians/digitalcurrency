import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Right, Body } from 'native-base';
import PropTypes from 'prop-types';
import Slideshow from 'react-native-slideshow';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Col, Row, Grid } from 'react-native-easy-grid';

const data = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeuQYdkItTcrHfKwmfl7dBADwJ9TVrQ4LZWltPbVeCIkPikqlH",
    name: "Kasur tipe A",
    price : "Rp.200.000"
  },
  {
    imageUrl: "https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/p/o/Poly_TV_Stand_0.jpg",
    name: "Meja tv unik",
    price : "Rp.100.000"
  },
  {
    imageUrl: "https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/p/o/Poly_TV_Stand_0.jpg",
    name: "Meja tipe B",
    price : "Rp.200.000"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeuQYdkItTcrHfKwmfl7dBADwJ9TVrQ4LZWltPbVeCIkPikqlH",
    name: "Kasur unik",
    price : "Rp.220.000"
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  constructor(props) {
    super(props);

    this.state = {
      data: data,
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Citilink Berhadiah',
          caption: 'Sampai 23 desember',
          url: 'https://citilinkstorage.blob.core.windows.net/citilink/images/default-source/promo-events-press-releases/greensale2-094d8367eddd767d084cdff0000433061.jpg?sfvrsn=0',
        }, {
          title: 'Bni 46 0% persen',
          caption: 'cicilan sampai 24 bulan',
          url: 'https://image01.kota.com/20140403023925/0000/0000/0032/8446/bni_mudik_08062017.jpeg',
        }, {
          title: 'Weekend deals',
          caption: 'Potongan 100rb',
          url: 'https://dwzph1g5tm8i1.cloudfront.net/landing/promo_hotel_jgos_2017_8a1.jpg',
        }, {
          title: 'Bni 46 0% persen',
          caption: 'cicilan sampai 24 bulan',
          url: 'https://image01.kota.com/20140403023925/0000/0000/0032/8446/bni_mudik_08062017.jpeg',
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View style={styles.container}> 
       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
        <MonoText style={{marginBottom:10}}>semua promo</MonoText>
        <Grid style={{Height: 100, marginTop:40,flexGrow: 1}}>
          <Row>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://th.seaicons.com/wp-content/uploads/2015/10/Retro-TV-icon.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://www.clipartmax.com/png/middle/191-1917296_bed-bedroom-furniture-motel-room-single-icon-bed-flat-icon-png.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxq82yLW7JtICF81wXt6Xa9cry7pgtij0VF5NClwmuMMWCvUrn'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://mbtskoudsalg.com/images/png-icons-4.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'http://www.icons101.com/icon_png/size_256/id_67319/Bathroom.png'}} />
            </Col>
          </Row>
          <Row style={{marginTop:80}}>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'http://www.icons101.com/icon_png/size_256/id_67319/Bathroom.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://th.seaicons.com/wp-content/uploads/2015/10/Retro-TV-icon.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://mbtskoudsalg.com/images/png-icons-4.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://www.clipartmax.com/png/middle/191-1917296_bed-bedroom-furniture-motel-room-single-icon-bed-flat-icon-png.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxq82yLW7JtICF81wXt6Xa9cry7pgtij0VF5NClwmuMMWCvUrn'}} />
            </Col>
          </Row>
        </Grid>
      <MonoText style={{marginTop:50}}>Rekomendasi</MonoText>
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card>
              <Body>
                <Image source={{uri : rowData.imageUrl}} style={{height: 150, width: 150, flex: 1}}/>
              </Body>
            <CardItem footer>
              <Left >
                <Text style={{fontSize: 13}}>{rowData.name} {'\n'} {rowData.price}</Text>
              </Left>
            </CardItem>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      <MonoText style={{marginTop:12}}>Best Seller</MonoText>
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card>
              <Body>
                <Image source={{uri : rowData.imageUrl}} style={{height: 150, width: 150, flex: 1}}/>
              </Body>
            <CardItem footer>
              <Left>
               <Text style={{fontSize:13}}>{rowData.name} {'\n'} {rowData.price}</Text>
              </Left>
            </CardItem>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
        {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help,s it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> */}

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    // paddingTop: 30,
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    position: 'absolute',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
