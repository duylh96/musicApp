import React, {Component} from 'react';
import {View, Text, Button, Icon, Container, Content, List, ListItem, Thumbnail} from 'native-base';
import {Image, StyleSheet} from 'react-native';

import GridView from 'react-native-super-grid';




export default class BXHScreen extends Component {
    render() {
		const song_source = [			
			//music images
        {url:'https://avatar-nct.nixcdn.com/song/2017/10/27/9/d/8/d/1509093543890.jpg',Name:'All Falls Down', Artist: 'Alan Walker, Noah Cyrus', id: 1,},
		{Name:"How Long", Artist: 'Charlie Puth', id: 2},
		{Name:"The Spectre", Artist: 'Alan Walker', id: 3},
		];
		const playlist_source = [			
			//music images
        {url:'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg',Name:'Divide', Artist: 'Ed Sheeran', id: 1},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg',Name:"Perfect", Artist: 'Taylor Swift', id: 2},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg',Name:"Revival", Artist: 'Eminem', id: 3},
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
								transparent androidRippleColor height={30}>
								<View style={styles.item_container}>
									<View style={styles.item_container_left}>
										<Text
											style={{
											alignSelf: 'center',
											color: Math.random(),
										}}>{item.id}</Text>
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
									   full block 
									   transparent androidRippleColor height={30}>
								<View style={styles.item_container}>
									<View style={styles.item_container_left}>
										<Text
											style={{
											alignSelf: 'center',
											color: Math.random(),
										}}>{item.id}</Text>
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
    	fontWeight: '200'
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
		marginBottom: 8,
		height: 60,
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
		height: 150,
		width: 110,
		flex: 1,
		marginTop: 95,
		zIndex:2,
		
	 },

    item_container: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        marginLeft: 100
    },
    item_container_left: {
        flexDirection: 'row'
    },
    title: {
        marginLeft: 15,
        alignSelf: 'center',
		flexDirection: 'row',
    },
    text_title: {
        fontWeight: '200',
        fontSize: 13,
        marginBottom: 5,
    },
    text_singer: {
        fontWeight: '100',
        fontSize: 11.5,
        color: 'gray',
		marginTop: 3,
    }
})
