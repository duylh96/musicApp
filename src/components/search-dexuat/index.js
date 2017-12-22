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

export default class SearchDexuat extends Component {
    render() {
        const {search_query} = this.props.param;
        const result = [
            {
                name: 'Năm Ấy',
                singer: 'Đức Phúc',
                type: 'song'
            }, {
                name: 'Năm Ấy',
                singer: 'Đức Phúc',
                type: 'mv'
            }
        ];
        return (
            <Content style={styles.container}>
                <Text style={styles.text_title}>Đề xuất</Text>
                <List
                    dataArray={result}
                    renderRow={(item) => <ListItem
                    style={{
                    backgroundColor: 'transparent'
                }}>
                    <Button transparent androidRippleColor full block style={styles.item_container}>
                        <Icon
                            style={{
                            fontSize: 30,
                            width: 26,
                            color: '#2daaed'
                        }}
                            name={item.type === 'song'
                            ? 'ios-musical-notes-outline'
                            : 'ios-film-outline'}/>
                        <View
                            style={{
                            marginLeft: 10
                        }}>
                            <Text style={styles.item_title}>{item.name}</Text>
                            <Text style={styles.item_sub_title}>{item.singer}</Text>
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
    item_title: {
        fontSize: 16
    },
    item_sub_title: {
        fontSize: 13,
        color: 'gray'
    }
});