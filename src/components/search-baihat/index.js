import React, {Component} from 'react';
import {
    View,
    Content,
    Left,
    Body,
    Right,
    Item,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    Thumbnail
} from 'native-base';
import {StyleSheet, Alert} from 'react-native'

export default class SearchBaihat extends Component {
    render() {
        const {search_query} = this.props.param;
        const result = [
            {
                name: 'Năm Ấy',
                singer: 'Đức Phúc',
                number: '1M'
            }, {
                name: 'Năm Ấy',
                singer: 'Mắt Ngọc',
                number: '729'
            }, {
                name: 'Năm Ấy',
                singer: 'Dĩnh Nhi',
                number: '822'
            }, {
                name: 'Mùa Oải Hương Năm Ấy',
                singer: 'Phạm Hồng Phước',
                number: '1M'
            }
        ];
        return (
            <Content style={styles.container}>
                <Text style={styles.text_title}>Bài hát</Text>
                <List
                    dataArray={result}
                    renderRow={(item) => <ListItem
                    style={{
                    backgroundColor: 'transparent'
                }}>
                    <Button transparent androidRippleColor full block>
                        <View style={styles.item_container}>
                            <Text style={styles.item_title}>{item.name}</Text>
                            <View style={styles.item_sub_view}>
                                <Text style={styles.item_sub_title}>{item.singer}</Text>
                                <Icon
                                    name='ios-headset'
                                    style={{
                                    marginLeft: 10,
                                    marginRight: 5,
                                    fontSize: 14,
                                    color: 'gray'
                                }}/>
                                <Text style={styles.item_sub_title}>{item.number}</Text>
                            </View>
                        </View>
                    </Button>
                </ListItem>}/>
            </Content>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingLeft: 5
    },
    text_title: {
        fontSize: 18
    },
    item_container: {},
    item_title: {},
    item_sub_title: {
        fontSize: 14,
        color: 'gray'
    },
    item_sub_view: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});