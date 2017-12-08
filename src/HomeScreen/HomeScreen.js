import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Text,
  Container,
  Content,
  View,
  Card,
  CardItem,
  Body,
  Left,
  Icon,
  Thumbnail,
  Footer,
  FooterTab,
  Button
} from 'native-base';
import Swiper from 'react-native-swiper';

export default class HomeScreen extends Component {
  onTouchStart = () => {
    console.log('focused!');
    this
      .props
      .func(true);
  };
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <View style={{
            height: 150
          }}>
            <Swiper
              autoplay={true}
              autoplayTimeout={2}
              autoplayDirection={true}
              showsButtons={true}
              onTouchStartCapture={this.onTouchStart}
              dot={< View style = {
              styles.dot
            } />}
              activeDot={< View style = {
              styles.activedot
            } />}>
              <View style={styles.slide}>
                <Image
                  source={require('../Images/Banners/1.jpg')}
                  style={styles.banner}
                  resizeMode='cover'/>
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../Images/Banners/2.jpg')}
                  style={styles.banner}
                  resizeMode='cover'/>
              </View>
              <View style={styles.slide}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </View>
          <Text style={{}}>Hello</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button transparent>
              <View></View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  slide: {
    height: 150
  },
  banner: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    margin: 0,
    padding: 0
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 18,
    height: 8,
    borderRadius: 4,
    margin: 3
  },
  activedot: {
    backgroundColor: '#007aff',
    width: 18,
    height: 8,
    borderRadius: 4,
    margin: 3
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})