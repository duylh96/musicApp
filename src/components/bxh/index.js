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
import Song from '../../Api/Song'

var BUTTONS = [
    {
        text: "Option 0",
        icon: "american-football",
        iconColor: "#2c8ef4"
    }, {
        text: "Option 1",
        icon: "analytics",
        iconColor: "#f42ced"
    }, {
        text: "Option 2",
        icon: "aperture",
        iconColor: "#ea943b"
    }, {
        text: "Delete",
        icon: "trash",
        iconColor: "#fa213b"
    }, {
        text: "Cancel",
        icon: "close",
        iconColor: "#25de5b"
    }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class Bxh extends Component {
    render() {
        const song_source = [
            {
                id: 1,
                name: 'Năm Ấy',
                singer: 'Đức Phúc',
                color: 'purple',
                url: require('../../Images/Albums/0.jpg'),
                content: new Song(require('../../Musics/Nam-Ay.mp3'))
            }, {
                id: 2,
                name: 'Người Yêu Cô Ấy',
                singer: 'Châu Khải Phong',
                color: 'green',
                url: require('../../Images/Albums/1.jpg'),
                content: new Song(require('../../Musics/Nam-Ay.mp3'))
            }, {
                id: 3,
                name: 'Tophit 90-2000 Remix',
                singer: 'Nguyễn Hải Yến',
                color: 'orange',
                url: require('../../Images/Albums/2.jpg'),
                content: new Song(require('../../Musics/Nam-Ay.mp3'))
            }, {
                id: 4,
                name: 'Cánh Hoa Tàn',
                singer: 'Hương Tràm',
                color: 'gray',
                url: require('../../Images/Albums/3.jpg'),
                content: new Song(require('../../Musics/Nam-Ay.mp3'))
            }, {
                id: 5,
                name: 'Let Me Know',
                singer: 'Bùi Anh Tú',
                color: 'gray',
                url: require('../../Images/Albums/4.jpg'),
                content: new Song(require('../../Musics/Nam-Ay.mp3'))
            }
        ];
        return (
            <View>
                <View style={styles.bxh_header}>
                    <Text style={styles.bxh_text_header}>BXH Bài hát Việt Nam</Text>
                    <Button androidRippleColor transparent>
                        <Icon name="ios-arrow-dropright"/>
                    </Button>
                </View>

                <List
                    dataArray={song_source}
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
                        // item
                        //     .content
                        //     .play();
                        this.props.footer.play(item);
                    }}>
                        <View style={styles.item_container}>
                            <View style={styles.item_container_left}>
                                <Text
                                    style={{
                                    alignSelf: 'center',
                                    color: `${item.color}`
                                }}>{`0${item.id}`}</Text>
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