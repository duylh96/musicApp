import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
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
import Swiper from 'react-native-swiper';

export default class HomeScreen extends Component {
  onTouchStart = () => {
    console.log('focused!');
    this
      .props
      .func(true);
  };
  onTouchEnd = () => {

    setTimeout(() => {
      console.log('ended!');
      this
        .props
        .func(false);
    }, 2000);
  };
  render() {
    return (
      <Container>
        <View style={{
          height: 150
        }}>
          <Swiper
            showsButtons={true}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}>
            <View style={styles.slide}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <Text style={{}}>Hello</Text>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    height: 150,
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})