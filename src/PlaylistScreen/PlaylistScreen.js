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

var Data = [
    {url:'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg', Name:'Divide'},
	{url:'https://blogs-images.forbes.com/alishagrauso/files/2016/05/Iron-Man-Robert-Downey-Jr-Interview-1200x600.jpg?width=960', Name:"Iron Man"},
	{url:'https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all', Name:"Captain American"}, 
	{url:'https://lumiere-a.akamaihd.net/v1/images/usa_spider-man_hero_games_m_9b86ed13.jpeg?region=0%2C0%2C640%2C320', Name:"Spider-Man"}, 
	{url:'http://armchairarcade.com/perspectives/wp-content/uploads/2017/11/avengers-3-infinity-war-banner-story-spoliers-clues-1022009.jpg', Name:"Avenger"}, 
];
	

export default class PlaylistScreen extends Component < {} > {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e']),
            dataSource: ds.cloneWithRows(Data)
        };
      }
	CreateRender(property){
	return(
			<View style={css.renBox}>
                <View style={css.renItem}>
                    <Image
                        style={css.icon}
                        source={{
                        uri: property.url
                    }}/>
                    <Text style={css.tieude1}>
						{property.Name}
                    </Text>
                </View>
			 </View>		
	);
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
                        renderRow={(this.CreateRender)}
                      />

        );
    }
}




var css = StyleSheet.create({
    icon: {
        width: 120,
        height: 120
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
        flexDirection: 'row',
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
