import React, {Component} from 'react';

import {Platform, StyleSheet, TouchableOpacity, Image, ListView} from 'react-native';

import {
		View,
		Text,
		Button,
		Icon,
		Content,
		StyleProvider
} from 'native-base';

import GridView from 'react-native-super-grid';

var Data = [
		//Icon
		{
				link: 'https://daks2k3a4ib2z.cloudfront.net/594a5ccb9407cf4ccfd5d32c/595d1d01117a9e1fbb' +
								'9c4fce_video-play-icon.png'
		}, {
				link: 'https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/audioguide_512pxGRE' +
								'Y.png'
		}
];

export default class PlaylistScreen extends Component < {} > {
		render() {
				const album_source = [
						//music images
						{
								url: 'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg',
								Name: 'Divide',
								Artist: 'Ed Sheeran'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg',
								Name: "Perfect",
								Artist: 'Taylor Swift'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg',
								Name: "Revival",
								Artist: 'Eminem'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/10/26/7/8/7/7/1509020943688.jpg',
								Name: "All Falls Down (Single)",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/26/c/b/2/f/1511674037040.jpg',
								Name: "Deamn (EP)",
								Artist: 'Deamn'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/09/15/d/d/7/a/1505408464480.jpg',
								Name: "The Spectre (Single)",
								Artist: 'Alan Walker'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/16/1/9/5/5/1510842870535.jpg',
								Name: "Christmas Piano Chill",
								Artist: 'Michael Forster'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512117674419.jpg',
								Name: "So Far Away (Single)",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/17/c/7/5/7/1510855400530.jpg',
								Name: "Havana Remix",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/02/c/d/5/b/1509587114293.jpg',
								Name: "Legend Never Die",
								Artist: 'V.A'
						}, {
								url: 'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg',
								Name: 'Divide',
								Artist: 'Ed Sheeran'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg',
								Name: "Perfect",
								Artist: 'Taylor Swift'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg',
								Name: "Revival",
								Artist: 'Eminem'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/10/26/7/8/7/7/1509020943688.jpg',
								Name: "All Falls Down (Single)",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/26/c/b/2/f/1511674037040.jpg',
								Name: "Deamn (EP)",
								Artist: 'Deamn'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/09/15/d/d/7/a/1505408464480.jpg',
								Name: "The Spectre (Single)",
								Artist: 'Alan Walker'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/16/1/9/5/5/1510842870535.jpg',
								Name: "Christmas Piano Chill",
								Artist: 'Michael Forster'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512117674419.jpg',
								Name: "So Far Away (Single)",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/17/c/7/5/7/1510855400530.jpg',
								Name: "Havana Remix",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/02/c/d/5/b/1509587114293.jpg',
								Name: "Legend Never Die",
								Artist: 'V.A'
						}, {
								url: 'https://pbs.twimg.com/profile_images/819500159365160960/AOneM0y3_400x400.jpg',
								Name: 'Divide',
								Artist: 'Ed Sheeran'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg',
								Name: "Perfect",
								Artist: 'Taylor Swift'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg',
								Name: "Revival",
								Artist: 'Eminem'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/10/26/7/8/7/7/1509020943688.jpg',
								Name: "All Falls Down (Single)",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/26/c/b/2/f/1511674037040.jpg',
								Name: "Deamn (EP)",
								Artist: 'Deamn'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/09/15/d/d/7/a/1505408464480.jpg',
								Name: "The Spectre (Single)",
								Artist: 'Alan Walker'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/16/1/9/5/5/1510842870535.jpg',
								Name: "Christmas Piano Chill",
								Artist: 'Michael Forster'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/12/01/4/b/f/0/1512117674419.jpg',
								Name: "So Far Away (Single)",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/17/c/7/5/7/1510855400530.jpg',
								Name: "Havana Remix",
								Artist: 'V.A'
						}, {
								url: 'https://avatar-nct.nixcdn.com/playlist/2017/11/02/c/d/5/b/1509587114293.jpg',
								Name: "Legend Never Die",
								Artist: 'V.A'
						}
				];
				return (
						<Content>
								<View style={css.album}>
										<View style={css.album_header}>
												<Text style={css.album_text_header}>Playlist</Text>
												<View style={css.selection}>
														<Button androidRippleColor transparent>
																<Text>New
																</Text>
														</Button>
														<Button androidRippleColor transparent>
																<Text>HOT</Text>
														</Button>
												</View>
										</View>
										<GridView
												style={css.album_grid}
												itemsPerRow={4}
												itemDimension={110}
												spacing={0}
												items={album_source}
												renderItem={item => (
												<Button transparent androidRippleColor height={180} width ={120}>
														<View style={css.album_grid_item}>
																<Image
																		source={{
																		uri: 'https://daks2k3a4ib2z.cloudfront.net/594a5ccb9407cf4ccfd5d32c/595d1d01117a9e1fbb9c4fce_video-play-icon.png'
																}}
																		style={css.iconPlay}/>
																<Text style={css.hear}>2.3</Text>
																<Image
																		source={{
																		uri: 'https://marketplace.canva.com/MACZMi8_80g/1/thumbnail_large/canva-industrial-safety-headphones-icon-MACZMi8_80g.png'
																}}
																		style={css.iconListen}/>
																<Image
																		source={{
																		uri: item.url
																}}
																		style={css.album_grid_item_image}/>
																<View
																		style={{
																		height: 60,
																		justifyContent: 'space-between',
																		zIndex: 2,
																		marginTop: 120
																}}>
																		<Text
																				style={{
																				fontWeight: '200',
																				fontSize: 15,
																				paddingLeft: 2
																		}}>{item.Name}</Text>
																		<Text
																				style={{
																				fontWeight: '100',
																				fontSize: 13,
																				color: 'gray',
																				paddingLeft: 2
																		}}>{item.Artist}</Text>
																</View>
														</View>
												</Button>
										)}/>
								</View>
						</Content>
				);
		}
}
var css = StyleSheet.create({
		hear: {
				position: 'absolute',
				height: 30,
				width: 30,
				marginTop: 100,
				marginLeft: 35,
				zIndex: 2,
				fontSize: 13,
				color: 'white'
		},
		iconListen: {
				position: 'absolute',
				height: 30,
				width: 30,
				marginTop: 90,
				zIndex: 2
		},
		iconPlay: {
				position: 'absolute',
				height: 40,
				width: 35,
				marginLeft: 80,
				marginTop: 85,
				zIndex: 2
		},
		album: {},
		album_header: {
				flexDirection: 'row',
				//justifyContent: 'space-between',
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
				fontWeight: '200'
		},
		album_grid: {
				flexDirection: 'row',
				borderWidth: 0
		},
		album_grid_item: {
				flex: 1,
				margin: 0,
				padding: 0,
				marginBottom: 15
		},
		album_grid_item_image: {
				position: 'absolute',
				width: 120,
				height: 120,
				zIndex: 1
		},
		selection: {
				marginLeft: 150,
				flexDirection: 'row'
		}
});
