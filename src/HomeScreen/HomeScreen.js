import React, {Component} from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';
import {
  Text,
  Container,
  Content,
  DeckSwiper,
  View,
  Card,
  CardItem,
  Body,
  Left,
  Icon,
  Thumbnail
} from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../Images/Banners/1.jpg')
  }, {
    text: 'Card Two',
    name: 'Two',
    image: require('../Images/Banners/2.jpg')
  }
];
export default class HomeScreen extends Component {
  setFocus = () => {
    console.log('focused!');
    this
      .props
      .func(true);
  };
  render() {
    return (
      <Container>
        <View>
          <TouchableWithoutFeedback
            onPressIn={this.setFocus}
            style={{
            height: 300
          }}>
            <DeckSwiper
              looping
              dataSource={cards}
              renderItem={item => <Card style={{
              elevation: 3
            }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image}/>
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  style={{
                  height: 200,
                  flex: 1
                }}
                  source={item.image}/>
              </CardItem>
              <CardItem>
                <Icon
                  name="heart"
                  style={{
                  color: '#ED4A6A'
                }}/>
                <Text>{item.name}</Text>
              </CardItem>
            </Card>}/>
          </TouchableWithoutFeedback>
        </View>
      </Container>
    )
  }
}