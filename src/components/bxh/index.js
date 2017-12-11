import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native'
import {
    View,
    Text,
    Button,
    Icon,
    List,
    ListItem,
    Thumbnail
} from 'native-base';

class Bxh extends Component {
    render() {
        const song_source = [
            {
                id: 1,
                name: 'Năm Ấy',
                singer: 'Đức Phúc',
                url: require('../../Images/Albums/0.jpg')
            }, {
                id: 2,
                name: 'Người Yêu Cô Ấy',
                singer: 'Châu Khải Phong',
                url: require('../../Images/Albums/1.jpg')
            }, {
                id: 3,
                name: 'Tophit 90-2000 Remix',
                singer: 'Nguyễn Hải Yến',
                url: require('../../Images/Albums/2.jpg')
            }, {
                id: 4,
                name: 'Cánh Hoa Tàn',
                singer: 'Hương Tràm',
                url: require('../../Images/Albums/3.jpg')
            }, {
                id: 5,
                name: 'Let Me Know',
                singer: 'Bùi Anh Tú',
                url: require('../../Images/Albums/4.jpg')
            }
        ];
        return (
            <View>
                <View style={styles.bxh_header}>
                    <Text style={styles.bxh_text_header}>BXH Bài hát Việt Nam</Text>
                    <Button androidRippleColor transparent>
                        <Icon name="md-arrow-forward"/>
                    </Button>
                </View>

                <List
                    dataArray={song_source}
                    renderRow={item => <ListItem>
                    <Button block transparent androidRippleColor height={60}>
                        <View style={styles.item_container}>
                            <View style={styles.item_container_left}>
                                <Text>{`0${item.id}`}</Text>
                                <Thumbnail size={80} source={item.url} style={styles.poster}/>
                                <View style={styles.title}>
                                    <Text style={styles.text_title}>{item.name}</Text>
                                    <Text style={styles.text_singer}>{item.singer}</Text>
                                </View>
                            </View>
                            <View style={styles.item_container_right}>
                                <Button transparent light androidRippleColor>
                                    <Icon
                                        name='md-more'
                                        style={{
                                        color: 'black'
                                    }}/>
                                </Button>
                            </View>
                        </View>
                    </Button>
                </ListItem>}></List>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    item_container: {
        flexDirection: 'row'
    },
    item_container_left: {
        flexDirection: 'row'
    },
    item_container_right: {
        alignItems: 'flex-end'
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
        marginLeft: 15
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