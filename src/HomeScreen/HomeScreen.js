import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Container, Content, StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import SwiperBanner from '@components/swiper-banner'
import GridAlbum from '@components/grid-album'

import Bxh from '@components/bxh'

import MvHot from '@components/mv-hot'

export default class HomeScreen extends Component {
  onTouchStart = () => {
    console.log('focused!');
    this
      .props
      .func(true);
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content style={styles.container}>
            <SwiperBanner/>
            <GridAlbum footer={this.props.footer}/>
            <Bxh footer={this.props.footer}/>
            <MvHot/>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
})