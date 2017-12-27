import React, {Component} from 'react';
import {View, Text, Button, Icon, Container, Content, List, ListItem} from 'native-base';
import {Image, StyleSheet} from 'react-native';

import GridView from 'react-native-super-grid';




export default class BXHScreen extends Component {
    render() {
		const song_source = [			
			//music images
        {Name:'All Falls Down', Artist: 'Alan Walker, Noah Cyrus', id: 1},
		{Name:"How Long", Artist: 'Charlie Puth', id: 2},
		{Name:"The Spectre", Artist: 'Alan Walker', id: 3},
		];
		const playlist_source = [			
			//music images
        {Name:'Divide', Artist: 'Ed Sheeran', id: 1},
		{Name:"Perfect", Artist: 'Taylor Swift', id: 2},
		{Name:"Revival", Artist: 'Eminem', id: 3},
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
						  <List
							//style={styles.list}
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
										<View style={styles.title}>
											<Text style={styles.text_title}>{item.Name}</Text>
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
							<List
							dataArray={playlist_source}
							renderRow={item => <ListItem >
							<Button full block transparent androidRippleColor height={60}>
								<View style={styles.item_container}>
									<View style={styles.item_container_left}>
										<Text
											style={{
											alignSelf: 'center',
											color: Math.random(),
										}}>{`0${item.id}`}</Text>
										<View style={styles.title}>
											<Text style={styles.text_title}>{item.Name}</Text>
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
	 },
	 list:{
     },
	 content_styles:{
	 },
	 icon_tittle:{
		fontSize: 12,
		fontWeight: '100',
     },
	 icon:{
		width: 80,
	 },

    item_container: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between'
    },
    item_container_left: {
        flexDirection: 'row'
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
