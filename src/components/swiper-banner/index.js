import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'native-base';
import Swiper from 'react-native-swiper';

class SwiperBanner extends Component {
  render() {
    return (
      <View style={{
        height: 150
      }}>
        <Swiper
          autoplay={true}
          autoplayTimeout={2}
          autoplayDirection={true}
          onTouchStartCapture={this.onTouchStart}
          dot={< View style = {
          styles.dot
        } />}
          activeDot={< View style = {
          styles.activedot
        } />}>
          <View style={styles.slide}>
            <Image
              source={require('../../Images/Banners/1.jpg')}
              style={styles.banner}
              resizeMode='cover'/>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../Images/Banners/2.jpg')}
              style={styles.banner}
              resizeMode='cover'/>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../Images/Banners/3.jpg')}
              style={styles.banner}
              resizeMode='cover'/>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: '#2daaed',
    width: 18,
    height: 8,
    borderRadius: 4,
    margin: 3
  }
});
export default SwiperBanner;