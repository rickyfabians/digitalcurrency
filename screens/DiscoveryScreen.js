import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class DiscoveryScreen extends Component {
    static navigationOptions = {
        title: "Discovery",
      };
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgfmgMGbS_G_QjEqxDmDRTgVBazEBQuWpG9hF22ymzPSGMo-o'}} />
                <Body>
                  <Text>Jelek</Text>
                  <Text note>Gitaris</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.dhresource.com/0x0s/f2-albu-g1-M01-A4-B5-rBVaGVasjgeAMBUUAAJTufMzvQI313.jpg/the-wholesale-hot-sale-customized-two-neck.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}