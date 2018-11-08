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

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import { ENTRIES1, LISTOFCATEGORY ,PRODUCTS} from '../static/entries';


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
      loc:LISTOFCATEGORY,
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
    const recomendationSlide = this.TopProduct();
    const listOfCategory = this.listOfCategory();
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
       {promoSlide}
      <MonoText style={{marginTop:30}}>Rekomendasi</MonoText>
      {recomendationSlide}
      <MonoText style={{marginTop:30}}>Liat Kategori</MonoText>
      {listOfCategory}
        </ScrollView>
      </View>
    );
  }

  listOfCategory(){
    return (
      <Grid style={{flexGrow: 1}}>
        <Col style={{justifyContent: 'center',alignItems: 'center'}}>
            {LISTOFCATEGORY.map(function(arr,index) {
              return(
                <Row key={index}>
                <Card style={{borderRadius:10,width:'90%'}}>
                  <Body style={{marginTop:10}}>
                    <Text style={{fontSize:13,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>{arr.name}</Text>
                    <Image source={{uri : arr.imageUrl}} style={{height: 100, width: 120, borderTopLeftRadius:10, borderTopRightRadius:10}}/>
                  </Body>
                </Card>
              </Row>
              )
          })}
          </Col>
          <Col style={{justifyContent: 'center',alignItems: 'center'}}>
            {LISTOFCATEGORY.map(function(arr,index) {
              return(
                <Row key={index}>
                <Card style={{borderRadius:10,width:'90%'}}>
                  <Body style={{marginTop:10}}>
                    <Text style={{fontSize:13,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>{arr.name}</Text>
                    <Image source={{uri : arr.imageUrl}} style={{height: 100, width: 120, borderTopLeftRadius:10, borderTopRightRadius:10}}/>
                  </Body>
                </Card>
              </Row>
              )
          })}
          </Col>
    </Grid>

    )
  }

  TopProduct () {
    return (
        <FlatList
        horizontal
        data={PRODUCTS}
        renderItem={({ item: rowData }) => {
          return (
            <Card style={{borderRadius:10}}>
              <Body>
                <Image source={{uri : rowData.imageUrl}} style={{height: 113, width: 114, borderTopLeftRadius:10, borderTopRightRadius:10}}/>
              </Body>
              <Left>
               <Text style={{fontSize:13}}>{rowData.name} {'\n'} {rowData.price}</Text>
              </Left>
            </Card>
          );
        }}
        keyExtractor = { (item, index) => index.toString() }
      />
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
              // loop={true}
              // loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={2000}
              autoplayInterval={5000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
        </View>
    );
 }

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
