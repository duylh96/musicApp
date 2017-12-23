import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Thumbnail,
    Text,
    View
} from 'native-base';

export default class MainFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        light
                        androidRippleColor
                        onPress={() => this.props.nav.navigate('Play')}>
                        <View style={styles.footer}>
                            <Thumbnail source={require('../../Images/Disks/0.jpg')} style={styles.disk}/>
                            <View style={styles.footer_title}>
                                <Text style={styles.text_title}>LikeMusic</Text>
                                <Text style={styles.text_sub_title}>Nghe nhạc mọi lúc mọi nơi</Text>
                            </View>
                            <View style={styles.footer_play_area}>
                                <Button androidRippleColor transparent>
                                    <Icon
                                        name="md-play"
                                        style={{
                                        color: '#2daaed',
                                        fontSize: 15
                                    }}/>
                                </Button>
                                <Button androidRippleColor transparent>
                                    <Icon
                                        name="md-skip-forward"
                                        style={{
                                        color: '#2daaed',
                                        fontSize: 15
                                    }}/>
                                </Button>
                                <Button androidRippleColor transparent>
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