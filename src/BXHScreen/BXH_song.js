import React, {Component} from 'react';
import {View, Text, Button, Icon, Container, Content, List, ListItem, Thumbnail} from 'native-base';
import {Image, StyleSheet} from 'react-native';

import GridView from 'react-native-super-grid';




export default class BXHScreen extends Component {
    render() {
		const song_source = [			
			//music images
        {url:'https://avatar-nct.nixcdn.com/song/2017/10/27/9/d/8/d/1509093543890.jpg', Name:'All Falls Down', Artist: 'Alan Walker, Noah Cyrus', id: 1},
		{url:'https://avatar-nct.nixcdn.com/song/2017/10/06/e/9/f/a/1507251243664.jpg', Name:"How Long", Artist: 'Charlie Puth', id: 2},
		{url:'https://avatar-nct.nixcdn.com/song/2017/09/14/c/5/1/7/1505408316386.jpg', Name:"The Spectre", Artist: 'Alan Walker', id: 3},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/10/26/7/8/7/7/1509020943688.jpg', Name:"All Falls Down (Single)", Artist: 'V.A', id: 4},
		{url:'https://avatar-nct.nixcdn.com/song/2017/10/25/f/3/a/5/1508949700484.jpg', Name:"Wolves", Artist: 'Selena Gome, Marshmello', id: 5},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/17/c/7/5/7/1510855400530.jpg', Name:"Havana", Artist: 'Camila Cabello, Young Thug', id: 6},
		{url:'https://avatar-nct.nixcdn.com/song/2017/08/29/d/f/c/c/1503988925454.jpg', Name:"Look What You Made Me Do", Artist: 'Taylor Swift', id: 7},
		{url:'https://avatar-nct.nixcdn.com/song/2017/11/27/7/d/1/c/1511749475974.jpg', Name:"Hypnotized ", Artist: 'Deamn', id: 8},
		{url:'https://avatar-nct.nixcdn.com/song/2017/09/08/e/2/7/8/1504833729381.jpg', Name:"Dusk Till Dawn", Artist: 'Zayn, Sia', id: 9},
		{url:'https://avatar-nct.nixcdn.com/song/2017/12/01/4/c/0/3/1512117950090.jpg', Name:"So Far Away", Artist: 'Martin Garrix, David Guetta, Jamie Scott, Romy Dya', id: 10},
		];
       

	return (
            <Container>
                <Content>
					  <View style={styles.album_header}>
						  <Text style={styles.album_text_header}>BXH</Text>
						  <Button androidRippleColor transparent>
							 <Image style={styles.icon} source ={{uri: 'https://cdn3.iconfinder.com/data/icons/audio-visual-acquicons/512/Eighth-Note.png'}}/>
							 <Text style={styles.icon_tittle}>Bài Hát</Text>
						  </Button>
						 <Button androidRippleColor transparent>
							 <Image style={styles.icon} source ={{uri: 'https://png.icons8.com/color/540/playlist.png'}}/>
							 <Text style={styles.icon_tittle}>Playlist</Text>
						  </Button>
					  </View>
					  <List
						dataArray={song_source}
						renderRow={item => <ListItem >
						<Button full block transparent androidRippleColor height={60}>
							<View style={styles.item_container}>
								<View style={styles.item_container_left}>
									<Text
										style={{
										alignSelf: 'center',
										color: Math.random(),
									}}>{`0${item.id}`}</Text>
									<Thumbnail size={80} source={{uri: item.url}} style={styles.poster}/>
									<View style={styles.title}>
										<Text style={styles.text_title}>{item.Name}</Text>
										<Text style={styles.text_singer}>{item.Artist}</Text>
									</View>
								</View>
								<Button
									transparent
									light
									androidRippleColor
									style={{
									justifyContent: 'center'
								}}>
									<Icon
										name='md-more'
										style={{
										color: 'grey'
									}}/>
								</Button>
							</View>
						</Button>
					</ListItem>}></List>

				</Content>
            </Container>
			
        )
    }
}

const styles = StyleSheet.create({
	 icon_tittle:{
		fontSize: 12,
		fontWeight: '100',
     },
	 icon:{
		height: 20,
		width: 20,
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
		marginBottom: 8
	},
	album_text_header: {
		marginLeft: 10,
		fontSize: 20,
		fontWeight: '400'
	},
    item_container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    item_container_left: {
        flexDirection: 'row'
    },
    bxh_header: {
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
    bxh_text_header: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '400'
    },
    poster: {
        marginLeft: 20
    },
    title: {
        marginLeft: 15,
        alignSelf: 'center'
    },
    text_title: {
        fontWeight: '400',
        fontSize: 18,
        marginBottom: 5
    },
    text_singer: {
        fontWeight: '200',
        fontSize: 14,
        color: 'gray'
    }
})