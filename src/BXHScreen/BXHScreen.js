import React, {Component} from 'react';
import {View, Text, Button, Icon, Container, Content, List, ListItem, Thumbnail} from 'native-base';
import {Image, StyleSheet,TouchableOpacity} from 'react-native';
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

		const song_chart = [
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg', Fst:'Revival', Snd:'How Long', Trd:'The Spectre', type:'Song'},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/11/08/c/c/b/f/1510125100417.jpg', Fst:'Divide', Snd:'Perfect', Trd:'Revival', type:'List'},
		{url:'https://avatar-nct.nixcdn.com/playlist/2017/12/15/9/1/c/5/1513321050320.jpg', Fst:'Perfect', Snd:'Dangerous', Trd:'Revival', type:'Clip'},
		];
       

	return (
	            <Container>
					<Content>
						<Content style={styles.render}>
							<View style={styles.bxh_header}>
								<Text style={styles.bxh_text_header}>BXH US-UK</Text>
								<Button androidRippleColor transparent>
									<Icon name="md-arrow-forward"/>
								</Button>
							</View>
							<View style={styles.content_render}>
								<Button 
									style={styles.button}
									block 
									transparent androidRippleColor>
									<Image 
										style={styles.button_icon}
										source={{uri:'https://avatar-nct.nixcdn.com/playlist/2014/07/04/a/7/d/0/1404443534516_500.jpg'}}/>
									<Image
										style={styles.button_small_icon}
										source={{uri:'http://www.a-local-chaos-project.com/data/images/play_button.png'}}/>
								</Button>
								<View style={styles.item_render}>
									<TouchableOpacity>
										<View style={styles.first_render_item}>
											<Image
												style={{
												height: 30, width: 30,
												}} source= {{uri: 'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'}}/>
											<Text style={styles.text_title}>Buồn của anh</Text> 
											<Text style={styles.text_singer}>  K-ICM, Đạt G, Masew</Text>
										</View>
									</TouchableOpacity>
									
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'}}/>
										<Text style={styles.text_title}>Năm Ấy </Text> 
										<Text style={styles.text_singer}>  Đức Phúc</Text>
									</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'}}/>
										<Text style={styles.text_title}>Ông bà anh</Text> 
										<Text style={styles.text_singer}>  Lê Thiện Hiếu</Text>
									</View>
									</TouchableOpacity>
								</View>
							</View>
								<View style={styles.content_render}>
									<Button 
										style={styles.button}
										block 
										transparent androidRippleColor>
										<Image 
											style={styles.button_icon}
											source={{uri:'https://avatar-nct.nixcdn.com/playlist/2017/10/16/b/4/7/4/1508125242858_500.jpg'}}/>
										<Image
											style={styles.button_small_icon}
											source={{uri:'http://www.a-local-chaos-project.com/data/images/play_button.png'}}/>
									</Button>
								<View style={styles.item_render}>
									<TouchableOpacity>
										<View style={styles.first_render_item}>
											<Image
												style={{
												height: 30, width: 30,
												}} source= {{uri: 'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'}}/>
											<Text style={styles.text_title}>Nhớ (Single)</Text> 
											<Text style={styles.text_singer}>  Lê Thiện Hiếu</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'}}/>
										<Text style={styles.text_title}>Back To The Basic (2018) </Text> 
										<Text style={styles.text_singer}>  Tiêu Châu Như Quỳnh</Text>
									</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'}}/>
										<Text style={styles.text_title}>Xuân Bên Anh (Single) </Text> 
										<Text style={styles.text_singer}>  Châu Khải Phong</Text>
									</View>
									</TouchableOpacity>
								</View>
							</View>
								<View style={styles.content_render}>
									<Button 
										style={styles.button}
										block 
										transparent androidRippleColor>
										<Image 
											style={styles.button_icon}
											source={{uri:'https://avatar-nct.nixcdn.com/playlist/2017/07/31/1/c/4/9/1501496903063_500.jpg'}}/>
										<Image
											style={styles.button_small_icon}
											source={{uri:'http://www.a-local-chaos-project.com/data/images/play_button.png'}}/>
									</Button>
								<View style={styles.item_render}>
									<TouchableOpacity>
										<View style={styles.first_render_item}>
											<Image
												style={{
												height: 30, width: 30,
												}} source= {{uri: 'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'}}/>
											<Text style={styles.text_title}>Anh nói em nghe đi</Text> 
											<Text style={styles.text_singer}>  Hoàng Yến Chibi</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'}}/>
										<Text style={styles.text_title}>Ngày cưới </Text> 
										<Text style={styles.text_singer}>  Yến Lê, Yanbi</Text>
									</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'}}/>
										<Text style={styles.text_title}>Để cho em khóc </Text> 
										<Text style={styles.text_singer}>  Quang Hà </Text>
									</View>
									</TouchableOpacity>
								</View>
							</View>
						</Content>
						<Content >
							<View style={styles.bxh_header}>
								<Text style={styles.bxh_text_header}>BXH US-UK</Text>
								<Button androidRippleColor transparent>
									<Icon name="md-arrow-forward"/>
								</Button>
							</View>
							<View style={styles.content_render}>
								<Button 
									style={styles.button}
									block 
									transparent androidRippleColor>
									<Image 
										style={styles.button_icon}
										source={{uri:'https://avatar-nct.nixcdn.com/playlist/2017/04/20/3/e/0/9/1492656959098_500.jpg'}}/>
									<Image
										style={styles.button_small_icon}
										source={{uri:'http://www.a-local-chaos-project.com/data/images/play_button.png'}}/>
								</Button>
								<View style={styles.item_render}>
									<TouchableOpacity>
										<View style={styles.first_render_item}>
											<Image
												style={{
												height: 30, width: 30,
												}} source= {{uri: 'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'}}/>
											<Text style={styles.text_title}>Divide</Text> 
											<Text style={styles.text_singer}>  Ed Sheeran</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'}}/>
										<Text style={styles.text_title}>Perfect </Text> 
										<Text style={styles.text_singer}>  Taylor Swift</Text>
									</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'}}/>
										<Text style={styles.text_title}>Revival </Text> 
										<Text style={styles.text_singer}>  Eminem</Text>
									</View>
									</TouchableOpacity>
								</View>
							</View>
								<View style={styles.content_render}>
									<Button 
										style={styles.button}
										block 
										transparent androidRippleColor>
										<Image 
											style={styles.button_icon}
											source={{uri:'https://avatar-nct.nixcdn.com/playlist/2017/07/14/d/0/6/d/1500003297328_500.jpg'}}/>
										<Image
											style={styles.button_small_icon}
											source={{uri:'http://www.a-local-chaos-project.com/data/images/play_button.png'}}/>
									</Button>
								<View style={styles.item_render}>
									<TouchableOpacity>
										<View style={styles.first_render_item}>
											<Image
												style={{
												height: 30, width: 30,
												}} source= {{uri: 'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'}}/>
											<Text style={styles.text_title}>Shape of you</Text> 
											<Text style={styles.text_singer}>  Ed Sheeran</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'}}/>
										<Text style={styles.text_title}>Look what you made me do </Text> 
										<Text style={styles.text_singer}>  Taylor Swift</Text>
									</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'}}/>
										<Text style={styles.text_title}>Perfect </Text> 
										<Text style={styles.text_singer}>  Ed Sheeran</Text>
									</View>
									</TouchableOpacity>
								</View>
							</View>
								<View style={styles.content_render}>
									<Button 
										style={styles.button}
										block 
										transparent androidRippleColor>
										<Image 
											style={styles.button_icon}
											source={{uri:'https://avatar-nct.nixcdn.com/playlist/2017/08/07/a/1/6/5/1502074528808_500.jpg'}}/>
										<Image
											style={styles.button_small_icon}
											source={{uri:'http://www.a-local-chaos-project.com/data/images/play_button.png'}}/>
									</Button>
								<View style={styles.item_render}>
									<TouchableOpacity>
										<View style={styles.first_render_item}>
											<Image
												style={{
												height: 30, width: 30,
												}} source= {{uri: 'https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png'}}/>
											<Text style={styles.text_title}>A Team</Text> 
											<Text style={styles.text_singer}>  Ed Sheeran</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/badge-second-place-reward-award-33f61a015d97305e-512x512.png'}}/>
										<Text style={styles.text_title}>Demon </Text> 
										<Text style={styles.text_singer}>  Imagine Dragons</Text>
									</View>
									</TouchableOpacity>
									<TouchableOpacity>
									<View style={styles.first_render_item}>
										<Image
											style={{
											height: 30, width: 30,
											}} source= {{uri: 'http://images.easyfreeclipart.com/1223/back-gt-gallery-for-6th-place-ribbon-clip-art-1223092.png'}}/>
										<Text style={styles.text_title}>Cant stop the feeling </Text> 
										<Text style={styles.text_singer}>  Justin Timberlake</Text>
									</View>
									</TouchableOpacity>
								</View>
							</View>
						</Content>
					</Content>
	            </Container>
					
				
		
        )
    }
}

const styles = StyleSheet.create({
	render:{
		borderBottomColor: 'silver',
		borderBottomWidth:5,
	},
	first_render_item:{
		flexDirection:'row',
		height:40,
		
	},
	item_render:{
		flexDirection:'column',
		height:120,
		width:'100%',
		marginBottom: 20,
		
	},
	list_render:{
		flexDirection:'column',
		height:120,
	},
	button_small_icon:{
		position:'absolute',
		height:100,
		width:100,
		zIndex:2,
	},
	button_icon:{
		position:'absolute',
		height:115,
		width:120,
		zIndex:1,
	},
	button:{
		height:115,
		width:120,
	},
	content_render:{
		flexDirection: 'row',
		
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
	  },
	  bxh_text_header: {
		marginLeft: 10,
		fontSize: 20,
		fontWeight: '200'
	  },
    title: {
        marginLeft: 15,
        alignSelf: 'center',
		flexDirection: 'row',
    },
    text_title: {
        fontWeight: '600',
        fontSize: 14,
        marginTop: 10,
    },
    text_singer: {
        fontWeight: '200',
        fontSize: 12,
        color: 'gray',
		marginTop: 12,
    }
})
