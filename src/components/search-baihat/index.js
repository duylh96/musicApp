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
import {searchBaiHat} from '../../Api/DataBase';

export default class SearchBaihat extends Component {
    render() {
        const {search_query} = this.props.param;
        const result = searchBaiHat(search_query);
        return (
            <Content style={styles.container}>
                <Text style={styles.text_title}>Bài hát</Text>
                <List
                    dataArray={result}
                    renderRow={(item) => <ListItem
                    style={{
                    backgroundColor: 'transparent',
                    marginLeft: 5,
                    marginRight: 0,
                    padding: 0
                }}>
                    <Button
                        transparent
                        androidRippleColor
                        full
                        block
                        style={{
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
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
                        <Button transparent androidRippleColor>
                            <Icon
                                name='ios-more'
                                style={{
                                color: 'gray'
                            }}/>
                        </Button>
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