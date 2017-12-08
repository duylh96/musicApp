import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

class ListSong extends Component<{}> {


render() {
        return (
        <TouchableOpacity>
            <View style={css.renBox}>
                <Image
                style={css.icon}
                    source={{uri: 'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg'}}/>
                <View style={css.renItem}>
                    <Text style={css.tieude1}> Devide </Text>

                    <Text style={css.tieude2}> Ed Sheeran</Text>
                </View>
            </View>
          </TouchableOpacity>
        );
    }
}

var css = StyleSheet.create({
    icon:{
        width:60,
        height:60,
    },
    tieude1:{
        backgroundColor:'white',
        color:'black',
        flex:2,
    },
    tieude2:{
        backgroundColor:'white',
        color:'grey',
        flex:1,
    },
    renBox:{
        backgroundColor:'white',
        borderBottomWidth:1,
        flexDirection:'row',
        height:60,

    },
    renItem:{
        borderBottomWidth:1,
        flexDirection:'column',
    },
    border:{
        borderBottomWidth:1,
        flex:1,
    }
});
