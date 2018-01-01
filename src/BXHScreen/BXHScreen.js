import React, {Component} from 'react';
import {View, Text, Button, Icon, Container, Content, List, ListItem, Thumbnail} from 'native-base';
import {Image, StyleSheet} from 'react-native';

import GridView from 'react-native-super-grid';




export default class BXHScreen extends Component {
    render() {
		const song_source = [			
			//music images
        {url:'https://avatar-nct.nixcdn.com/song/2017/10/27/9/d/8/d/1509093543890.jpg',Name:'All Falls Down', Artist: 'Alan Walker, Noah Cyrus', id: 1, id_img:'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'},
		{Name:"How Long", Artist: 'Charlie Puth', id: 2,id_img:'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'},
		{Name:"The Spectre", Artist: 'Alan Walker', id: 3, id_img: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'},
		];
		const playlist_source = [			
			//music images
        {url:'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg',Name:'Divide', Artist: 'Ed Sheeran', id: 1, id_img:'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg',Name:"Perfect", Artist: 'Taylor Swift', id: 2, id_img:'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg',Name:"Revival", Artist: 'Eminem', id: 3, id_img: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'},
		];
       

	return (
            <Container>
				<Content>
					<Content style={styles.content_styles}>
						  <View style={styles.bxh_header}>
							<Text style={styles.bxh_text_header}>Song Chart</Text>
							<Button androidRippleColor transparent>
								<Icon name="md-arrow-forward"/>
							</Button>
						  </View>
						  <Button 
								style={styles.icon}
						  		block 
								transparent androidRippleColor height={160}>
						   		<Image source={{uri:'https://avatar-nct.nixcdn.com/song/2017/10/27/9/d/8/d/1509093543890.jpg'}} style={styles.icon}/>
						  </Button>
						  <List
							style={styles.list}
							dataArray={song_source}
							renderRow={item => <ListItem >
							<Button 
								//block 
								transparent androidRippleColor >
								<View style={styles.item_container}>
									<View style={styles.item_container_left}>
										<Image
											style={{
											alignSelf: 'center',
											height: 45, width: 45,
										}} source= {{uri: item.id_img}}/>
										<Image source={{uri: item.url}} style={styles.icon}/>
										<View style={styles.title}>
											<Text style={styles.text_title} >{item.Name}</Text>
											<Text>  </Text>
											<Text style={styles.text_singer}>{item.Artist}</Text>
										</View>
									</View>					
								</View>
							</Button>
						</ListItem>}></List>
					</Content>
					<Content style={styles.content_styles}>
							<View style={styles.bxh_header}>
								<Text style={styles.bxh_text_header}>Playlist Chart</Text>
								<Button androidRippleColor transparent>
									<Icon name="md-arrow-forward"/>
								</Button>
							</View>
						    <Button 
								style={styles.icon}
						  		block 
								transparent androidRippleColor height={160}>
						   		<Image source={{uri:'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg'}} style={styles.icon}/>
						    </Button>
							<List
							dataArray={playlist_source}
							renderRow={item => <ListItem >
							<Button 
								transparent androidRippleColor >
								<View style={styles.item_container}>
									<View style={styles.item_container_left}>
										<Image
											style={{
											alignSelf: 'center',
											height: 45, width: 45,
										}} source= {{uri: item.id_img}}/>
										<Image source={{uri: item.url}} style={styles.icon}/>
										<View style={styles.title}>
											<Text style={styles.text_title}>{item.Name}</Text>
											<Text>  </Text>
											<Text style={styles.text_singer}>{item.Artist}</Text>
										</View>
									</View>
								</View>
							</Button>
						</ListItem>}></List>
					</Content>
				</Content>
            </Container>
			
        )
    }
}

const styles = StyleSheet.create({
	 render:{
		flexDirection: 'row',
     },
	 bxh_text_header: {
		marginLeft: 10,
    	fontSize: 18,
    	fontWeight: '200',
		height: 30,
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
		height: 80,
		zIndex:1
	 },
	 list:{
		flex: 2,
		zIndex:1,
     },
	 content_styles:{
		 flexDirection:'column'
	 },
	 icon_tittle:{
		fontSize: 12,
		fontWeight: '100',
     },
	 icon:{
		position: 'absolute',
		height: 180,
		width: 130,
		flex: 1,
		marginTop: 125,
		zIndex:2,
	 },

    item_container: {
		alignItems: 'baseline',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        marginLeft: 120,
    },
    item_container_left: {
        flexDirection: 'row',
    },
    title: {
        marginLeft: 15,
        alignSelf: 'center',
		flexDirection: 'row',
    },
    text_title: {
        fontWeight: '200',
        fontSize: 13,
        //marginBottom: 5,
    },
    text_singer: {
        fontWeight: '100',
        fontSize: 11.5,
        color: 'gray',
		marginTop: 3,
    }
})
