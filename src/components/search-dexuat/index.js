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
        return (
            <Content>
                <Text style={styles.text_title}>{search_query}</Text>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    text_title: {
        fontSize: 20
    }
});