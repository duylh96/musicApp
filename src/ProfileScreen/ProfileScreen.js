import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
    Icon,
    Button,
    View
} from 'native-base';
import {StyleSheet} from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Button full transparent androidRippleColor style={styles.button_login}>
                        <View style={styles.view_login}>
                            <Icon name='ios-person-outline'/>
                            <Text>Đăng nhập</Text>
                        </View>
                        <Button transparent androidRippleColor>
                            <Icon
                                name='ios-arrow-forward'
                                style={{
                                color: 'gray'
                            }}/>
                        </Button>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-heart-outline' style={styles.icon_purple}/>
                            <Text style={styles.text}>Nhạc yêu thích</Text>
                        </View>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-time-outline' style={styles.icon}/>
                            <Text style={styles.text}>Nghe gần đây</Text>
                        </View>
                    </Button>
                    <Text style={styles.title}>NHẠC OFFLINE</Text>
                    <Button transparent androidRippleColor full style ={styles.button_with_number}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-paper-outline' style={styles.icon}/>
                            <Text style={styles.text}>Playlist</Text>
                        </View>
                        <Text>0</Text>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_with_number}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-musical-notes-outline' style={styles.icon}/>
                            <Text style={styles.text}>Bài hát</Text>
                        </View>
                        <Text>10</Text>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_with_number}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-disc' style={styles.icon}/>
                            <Text style={styles.text}>Album</Text>
                        </View>
                        <Text>0</Text>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_with_number}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-microphone-outline' style={styles.icon}/>
                            <Text style={styles.text}>Ca sĩ</Text>
                        </View>
                        <Text>10</Text>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_with_number}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-folder-outline' style={styles.icon}/>
                            <Text style={styles.text}>Thư mục</Text>
                        </View>
                        <Text>0</Text>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_with_number}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-download-outline' style={styles.icon}/>
                            <Text style={styles.text}>Download</Text>
                        </View>
                        <Text>1</Text>
                    </Button>
                    <Text style={styles.title}>NHẠC ONLINE</Text>
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-paper-outline' style={styles.icon}/>
                            <Text style={styles.text}>Playlist</Text>
                        </View>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-cloud-upload-outline' style={styles.icon}/>
                            <Text style={styles.text}>Upload</Text>
                        </View>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-add' style={styles.icon}/>
                            <Text style={styles.text}>Quan tâm</Text>
                        </View>
                    </Button>
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-refresh-outline' style={styles.icon}/>
                            <Text style={styles.text}>Khôi phục</Text>
                        </View>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    title: {
        marginLeft: 12,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '600',
        fontSize: 18
    },
    button_login: {
        height: 80,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    view_login: {
        flexDirection: 'row'
    },
    button_normal: {
        justifyContent: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    },
    button_with_number: {
        justifyContent: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    button_normal_view: {
        flexDirection: 'row'
    },
    icon_purple: {
        marginLeft: 10,
        textAlign: 'center',
        paddingTop: 5,
        backgroundColor: '#854c9e',
        borderRadius: 25,
        color: '#f9f7fc',
        width: 37,
        height: 37
    },
    icon: {
        marginLeft: 10,
        textAlign: 'center',
        paddingTop: 4,
        backgroundColor: '#f3f3f3',
        borderRadius: 25,
        width: 37,
        height: 37,
        color: '#969696'
    },
    text: {
        marginLeft: 10,
        alignSelf: 'center'
    }
});