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
import { Container, Header, Content, Card, CardItem, Input, Button, Icon, Left, Item, Body } from 'native-base';
import PropTypes from 'prop-types';
import Slideshow from 'react-native-slideshow';
import { WebBrowser } from 'expo';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styless, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 ,PRODUCTS} from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';


import { MonoText } from '../components/StyledText';
import { Col, Row, Grid } from 'react-native-easy-grid';

const SLIDER_1_FIRST_ITEM = 1;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      position: 1,
      interval: null
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

_renderItem ({item, index}) {
  return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
}

_renderItemWithParallax ({item, index}, parallaxProps) {
  return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
  );
}

  render() {
    const promoSlide = this.promoSlide(1);
    return (
      <View style={styles.container}> 
      <Header searchBar rounded style={styles.searchBar}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-cart" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

       <ScrollView contentContainerStyle={styles.contentContainer}>
       { promoSlide }
        <MonoText style={{marginBottom:10}}>semua promo</MonoText>
        <Grid style={{Height: 100, marginTop:40,flexGrow: 1}}>
          <Row>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Couch.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Couch.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Couch.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Couch.png'}} />
            </Col>
            <Col style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={styles.categoryImage} source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Couch.png'}} />
            </Col>
          </Row>
        </Grid>
      <MonoText style={{marginTop:30}}>Best Seller</MonoText>
      <FlatList
        horizontal
        data={PRODUCTS}
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
        keyExtractor = { (item, index) => index.toString() }
      />
        </ScrollView>
      </View>
    );
  }

  promoSlide (number) {
    const { slider1ActiveSlide } = this.state;
    return (
        <View style={{marginTop:10}}>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={2000}
              autoplayInterval={5000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
            {/* <Pagination
              dotsLength={ENTRIES1.length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.92)'}
              dotStyle={styles.paginationDot}
              inactiveDotColor={colors.black}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
            /> */}
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
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar:
  {
    backgroundColor:'white',
    marginBottom:5,
    borderRadius:25
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
