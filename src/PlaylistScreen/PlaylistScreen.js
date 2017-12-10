import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';

export default class PlaylistScreen extends Component < {} > {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e']),
            dataSource: ds.cloneWithRows(this.genRows({}))
        };
      }
      genRows(pressData: {[key: number]: boolean}): Array<string> {

          var data = [];

          for (var ii = 0; ii < 50; ii++) {

            data.push('Row ' + ii);

          }

          return data;

        }

    render() {
        return (
//            <TouchableOpacity>
//                <View style={css.renBox}>
//                    <Image
//                        style={css.icon}
//                        source={{
//                        uri: 'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg'
//                    }}/>
//                    <View style={css.renItem}>
//                        <Text style={css.tieude1}>
//                            Deviderr
//                        </Text>
//
//                        <Text style={css.tieude2}>
//                            Ed Sheeran</Text>
//                    </View>
//                </View></TouchableOpacity>
                 <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                      />

        );
    }
}




var css = StyleSheet.create({
    icon: {
        width: 100,
        height: 100
    },
    tieude1: {
        backgroundColor: 'white',
        color: 'black',
        flex: 1
    },
    tieude2: {
        backgroundColor: 'white',
        color: 'grey',
        flex: 1
    },
    renBox: {
        backgroundColor: 'white',
        flexDirection: 'column',
        height: 100,
        width: 200
    },
    renItem: {
        borderBottomWidth: 1,
        flexDirection: 'column'
    },
    border: {
        borderBottomWidth: 1,
        flex: 1
    }
});
