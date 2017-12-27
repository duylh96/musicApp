import React, {Component} from 'react';
import {StyleSheet, Animated, Easing, Alert} from 'react-native';
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Thumbnail,
    Text,
    View
} from 'native-base';
import Song from '../../Api/Song';

export default class MainFooter extends Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            posterURL: require('../../Images/Disks/0.jpg'),
            title: 'LikeMusic',
            sub_title: 'Nghe nhạc mọi lúc mọi nơi'
        }
    }
    spin() {
        this
            .animatedValue
            .setValue(0);
        Animated
            .timing(this.animatedValue, {
            toValue: 1,
            duration: 3600,
            easing: Easing.linear
        })
            .start((o) => {
                if (this.state.playing && o.finished) 
                    this.spin();
                else {
                    this
                        .animatedValue
                        .stopAnimation();
                }
            })
    }
    updateCurrentSong(song) {
        if (this.state.playing === true) {
            this.setState({playing: false});
            this
                .animatedValue
                .stopAnimation();
            this
                .animatedValue
                .setValue(0);
        }
        setTimeout(() => {
            this.setState({title: song.name, sub_title: song.singer, posterURL: song.url, playing: true});
            this.spin();
            this.currentSong = song.content;
            this
                .currentSong
                .play();
        }, 1000)

    };
    render() {
        playOrResume = () => {
            this
                .currentSong
                .play();
        };
        pause = () => {
            this
                .currentSong
                .pause();
        };
        showMenu = () => {
            alert('show menus')
        };
        const interpolateRotation = this
            .animatedValue
            .interpolate({
                inputRange: [
                    0, 0.25, 0.5, 0.75, 1
                ],
                outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg']
            })
        const animatedStyle = {
            transform: [
                {
                    rotate: interpolateRotation
                }
            ]
        }
        return (
            <Footer>
                <FooterTab>
                    <Button
                        light
                        androidRippleColor
                        onPress={() => this.props.nav.navigate('Play')}>
                        <View style={styles.footer}>
                            <Animated.View style={animatedStyle}>
                                <Thumbnail source={this.state.posterURL} style={styles.disk}/>
                            </Animated.View>
                            <View style={styles.footer_title}>
                                <Text style={styles.text_title}>{this.state.title}</Text>
                                <Text style={styles.text_sub_title}>{this.state.sub_title}</Text>
                            </View>
                            <View style={styles.footer_play_area}>
                                <Button androidRippleColor transparent onPress={playOrResume}>
                                    <Icon
                                        name="md-play"
                                        style={{
                                        color: '#2daaed',
                                        fontSize: 15
                                    }}/>
                                </Button>
                                <Button androidRippleColor transparent onPress={pause}>
                                    <Icon
                                        name="md-skip-forward"
                                        style={{
                                        color: '#2daaed',
                                        fontSize: 15
                                    }}/>
                                </Button>
                                <Button androidRippleColor transparent onPress={showMenu}>
                                    <Icon
                                        name="menu"
                                        style={{
                                        color: '#2daaed',
                                        fontSize: 15
                                    }}/>
                                </Button>
                            </View>
                        </View>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    disk: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginLeft: 2
    },
    footer_title: {
        marginLeft: 10
    },
    text_title: {
        marginTop: 5,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15
    },
    text_sub_title: {
        textAlign: 'left',
        fontWeight: '100',
        fontSize: 13
    },
    footer_play_area: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});