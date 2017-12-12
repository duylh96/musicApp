import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Text,
  Container,
  Content,
  View,
  Icon,
  Thumbnail,
  Footer,
  FooterTab,
  Button,
  StyleProvider
} from 'native-base';
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
            <GridAlbum/>
            <Bxh/>
            <MvHot/>
          </Content>
          <Footer>
            <FooterTab>
              <Button light androidRippleColor>
                <View style={styles.footer}>
                  <Thumbnail source={require('../Images/Disks/0.jpg')}/>
                  <View style={styles.footer_title}>
                    <Text style={styles.text_title}>Title</Text>
                    <Text style={styles.text_sub_title}>Sub Title</Text>
                  </View>
                  <View style={styles.footer_play_area}>
                    <Button androidRippleColor transparent>
                      <Icon
                        name="md-play"
                        style={{
                        color: '#2daaed'
                      }}/>
                    </Button>
                    <Button androidRippleColor transparent>
                      <Icon
                        name="md-skip-forward"
                        style={{
                        color: '#2daaed'
                      }}/>
                    </Button>
                    <Button androidRippleColor transparent>
                      <Icon
                        name="menu"
                        style={{
                        color: '#2daaed'
                      }}/>
                    </Button>
                  </View>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  },
  footer_title: {
    marginLeft: 18
  },
  text_title: {
    marginTop: 5,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  text_sub_title: {
    textAlign: 'left',
    fontWeight: '100'
  },
  footer_play_area: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})