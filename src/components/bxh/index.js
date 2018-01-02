import React, {Component} from 'react';
import {Image, StyleSheet, Alert} from 'react-native'
import {
    View,
    Text,
    Button,
    Icon,
    List,
    ListItem,
    Thumbnail,
    ActionSheet
} from 'native-base';
import {listSong} from '../../Api/DataBase';

var BUTTONS = [
    {
        text: "Thêm vào yêu thích",
        icon: "ios-heart-outline",
        iconColor: "black"
    }, {
        text: "Thêm vào danh sách đang phát",
        icon: "ios-play-outline",
        iconColor: "black"
    }, {
        text: "Thêm vào playlist",
        icon: "ios-list-box-outline",
        iconColor: "black"
    }, {
        text: "Tải về",
        icon: "ios-download-outline",
        iconColor: "black"
    }, {
        text: "Chia sẻ",
        icon: "ios-cloud-upload-outline",
        iconColor: "black"
    }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class Bxh extends Component {
    render() {
        return (
            <View>
                <View style={styles.bxh_header}>
                    <Text style={styles.bxh_text_header}>BXH Bài hát Việt Nam</Text>
                    <Button androidRippleColor transparent>
                        <Icon
                            name="ios-arrow-dropright"
                            style={{
                            color: "#2daaed"
                        }}/>
                    </Button>
                </View>

                <List
                    dataArray={listSong}
                    renderRow={item => <ListItem style={{
                    marginLeft: 3
                }}>
                    <Button
                        full
                        block
                        transparent
                        androidRippleColor
                        height={60}
                        onPress={() => {
                        this
                            .props
                            .footer
                            .play(item);
                    }}>
                        <View style={styles.item_container}>
                            <View style={styles.item_container_left}>
                                <Text
                                    style={{
                                    alignSelf: 'center',
                                    color: `${item.color}`
                                }}>{`0${item.id + 1}`}</Text>
                                <Thumbnail size={80} source={item.url} style={styles.poster}/>
                                <View style={styles.title}>
                                    <Text style={styles.text_title}>{item.name}</Text>
                                    <Text style={styles.text_singer}>{item.singer}</Text>
                                </View>
                            </View>
                            <Button
                                transparent
                                light
                                androidRippleColor
                                style={{
                                justifyContent: 'center'
                            }}
                                onPress={() => ActionSheet.show({
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                title: "Testing ActionSheet"
                            }, buttonIndex => {
                                alert(BUTTONS[buttonIndex].text);
                            })}>
                                <Icon
                                    name='md-more'
                                    style={{
                                    color: 'black'
                                }}/>
                            </Button>
                        </View>
                    </Button>
                </ListItem>}></List>

            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Bxh;