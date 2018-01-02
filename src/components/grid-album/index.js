import React, {Component} from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {Image, StyleSheet} from 'react-native';

import GridView from 'react-native-super-grid';
import {listAlbum} from '../../Api/DataBase';

class GridAlbum extends Component {

  render() {
    return (
      <View style={styles.album}>
        <View style={styles.album_header}>
          <Text style={styles.album_text_header}>Album Hot</Text>
          <Button androidRippleColor transparent>
            <Icon
              name="ios-arrow-dropright"
              style={{
              color: "#2daaed"
            }}/>
          </Button>
        </View>
        <GridView
          style={styles.album_grid}
          itemDimension={110}
          spacing={1}
          items={listAlbum}
          renderItem={item => (
          <Button transparent androidRippleColor height={180}>
            <View style={styles.album_grid_item}>
              <Image source={item.url} style={styles.album_grid_item_image}/>
              <View
                style={{
                height: 60,
                justifyContent: 'space-between'
              }}>
                <Text
                  style={{
                  fontWeight: '400',
                  fontSize: 15,
                  paddingLeft: 2
                }}>{item.name}</Text>
                <Text
                  style={{
                  fontWeight: '100',
                  fontSize: 13,
                  color: 'gray',
                  paddingLeft: 2
                }}>{item.singer}</Text>
              </View>
            </View>
          </Button>
        )}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  album: {},
  album_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'transparent',
    borderLeftColor: '#2daaed',
    borderStyle: 'solid',
    borderWidth: 8,
    marginTop: 18,
    marginBottom: 8
  },
  album_text_header: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '400'
  },
  album_grid: {
    borderWidth: 0
  },
  album_grid_item: {
    flex: 1,
    margin: 0,
    padding: 0,
    marginBottom: 15

  },
  album_grid_item_image: {
    width: 118,
    height: 118
  }
});

export default GridAlbum;