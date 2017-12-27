import React, {Component} from 'react';
import {View, Text, Button, Icon, Container, Content, List, ListItem, Thumbnail} from 'native-base';
import {Image, StyleSheet} from 'react-native';

import GridView from 'react-native-super-grid';


export default class ListBXH extends Component {
    render() {
		const song_source = [			
			//music images
        {url:'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg', Name:'Divide', Artist: 'Ed Sheeran', id: 1},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg', Name:"Perfect", Artist: 'Taylor Swift', id: 2},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg', Name:"Revival", Artist: 'Eminem', id: 3},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/10/26/7/8/7/7/1509020943688.jpg', Name:"All Falls Down (Single)", Artist: 'V.A', id: 4},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/26/c/b/2/f/1511674037040.jpg', Name:"Deamn (EP)", Artist: 'Deamn', id: 5},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/09/15/d/d/7/a/1505408464480.jpg', Name:"The Spectre (Single)", Artist: 'Alan Walker', id: 6},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/16/1/9/5/5/1510842870535.jpg', Name:"Christmas Piano Chill", Artist: 'Michael Forster', id: 7},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512117674419.jpg', Name:"So Far Away (Single)", Artist: 'V.A', id: 8},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/17/c/7/5/7/1510855400530.jpg', Name:"Havana Remix", Artist: 'V.A', id: 9},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/02/c/d/5/b/1509587114293.jpg', Name:"Legend Never Die", Artist: 'V.A', id: 10},
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
