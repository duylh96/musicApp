import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image, 
    ListView, 
} from 'react-native';

import {View,
		Text,
		Button,
		Icon,
		Container, Content, StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import GridAlbum from '@components/grid-album';

var Data = [
   {url:'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg', Name:'Divide'},
	{url:'https://blogs-images.forbes.com/alishagrauso/files/2016/05/Iron-Man-Robert-Downey-Jr-Interview-1200x600.jpg?width=960', Name:"Iron Man"},
	{url:'https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all', Name:"Captain American"}, 
	{url:'https://lumiere-a.akamaihd.net/v1/images/usa_spider-man_hero_games_m_9b86ed13.jpeg?region=0%2C0%2C640%2C320', Name:"Spider-Man"}, 
	{url:'https://www.cheatsheet.com/wp-content/uploads/2016/08/Avengers-Infinity-War-Logo-Joe-Steiner-1024x512.jpg?x57343', Name:"Avenger"}, 
];
	

export default class PlaylistScreen extends Component < {} > {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
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
                    <Text style={css.album_text_header}>
			{property.Name}
                    </Text>
                </View>
			 </View>	
			
	);
}

    render() {
        return (
			<StyleProvider style={getTheme(material)}>	
				<Content>
					<Container>
						<View>
						  <View style={css.album_header}>
							  <Text id="Favorite" style={css.album_text_header}>Favorite</Text>
							  <Button androidRippleColor transparent>
								<Icon name="md-arrow-forward"/>
							  </Button>
						  </View>
						  <ListView
								automaticallyAdjustContentInsets={false}
								//initialListSize={9}
								horizontal={true}
								dataSource={this.state.dataSource}
								renderRow={(this.CreateRender)}
								/>
								<View style={css.album_header}>
								  <Text style={css.album_text_header}>Most Interest</Text>
								  <Button androidRippleColor transparent>
									<Icon name="md-arrow-forward"/>
								  </Button>
							</View>
							<ListView
								automaticallyAdjustContentInsets={false}
								//initialListSize={9}
								horizontal={true}
								dataSource={this.state.dataSource}
								renderRow={(this.CreateRender)}
								/>
								<GridAlbum/>
						
							</View>
						</Container>
					</Content>	
				</StyleProvider>
        );
    }
}
var css = StyleSheet.create({
    icon: {
        width: 120,
        height: 100,
    },
    renBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
		width: 120,
        height: 150,
    },
    renItem: {
		borderBottomColor:"grey",
        borderBottomWidth: 1,
        flexDirection: 'column',
		
    },
    border: {
        borderBottomWidth: 1,
        flex: 1
    },
	album_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'transparent',
		borderLeftColor: '#2daaed',
		borderStyle: 'solid',
		borderWidth: 8,
		marginTop: 18,
		marginBottom: 8,
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
});
