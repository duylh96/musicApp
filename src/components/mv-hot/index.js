import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native'
import {View, Text, Button, Icon} from 'native-base';

import GridView from 'react-native-super-grid';

class MvHot extends Component {
    render() {
        const mv_source = [
            {
                name: 'Năm Ấy',
                singer: 'Đức Phúc',
                url: require('../../Images/Albums/6.jpg')
            }, {
                name: 'Hai Thế Giới',
                singer: 'Kyo York',
                url: require('../../Images/Albums/6.jpg')
            }, {
                name: 'Hãy Nói Với Cô Ấy Về Em',
                singer: 'Việt My',
                url: require('../../Images/Albums/7.jpg')
            }, {
                name: 'Yêu Trong Lặng Yên',
                singer: 'Hà Thế Dũng',
                url: require('../../Images/Albums/8.jpg')
            }
        ];
        return (
            <View>
                <View style={styles.mv_header}>
                    <Text style={styles.mv_text_header}>MV Hot</Text>
                    <Button androidRippleColor transparent>
                        <Icon name="ios-arrow-dropright"/>
                    </Button>
                </View>

                <GridView
                    style={styles.mv_grid}
                    items={mv_source}
                    itemDimension={167}
                    renderItem={item => (
                    <Button
                        transparent
                        androidRippleColor
                        height={150}
                        style={{
                        marginLeft: 0,
                        margin: 0,
                        padding: 0
                    }}>
                        <View style={styles.mv_grid_item}>
                            <Image source={item.url} style={styles.mv_grid_item_image}/>
                            <View
                                style={{
                                height: 40,
                                justifyContent: 'space-between'
                            }}>
                                <Text
                                    style={{
                                    fontWeight: '400',
                                    fontSize: 16
                                }}>{item.name}</Text>
                                <Text
                                    style={{
                                    fontWeight: '100',
                                    fontSize: 13,
                                    color: 'gray'
                                }}>{item.singer}</Text>
                            </View>
                        </View>
                    </Button>
                )}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mv_header: {
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
    mv_text_header: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '400'
    },
    mv_grid: {
        marginLeft: -7
    },
    mv_grid_item: {
        margin: 0,
        padding: 0,
        marginBottom: 5
    },
    mv_grid_item_image: {
        margin: 0,
        padding: 0,
        width: 175,
        height: 110
    }
});

export default MvHot;