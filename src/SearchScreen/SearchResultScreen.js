import React, {Component} from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Text,
    Content,
    StyleProvider
} from 'native-base';
import {StyleSheet} from 'react-native';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';

import SearchDexuat from '@components/search-dexuat'
import SearchBaihat from '@components/search-baihat'
import SearchPlaylist from '@components/search-playlist'
import Footer from '@components/footer';

export default class BXHScreen extends Component {
    render() {
        const {params} = this.props.navigation.state;
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header androidStatusBarColor="#1b668e">
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                                <Icon name='ios-arrow-back'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text>{params.search_query}</Text>
                        </Body>
                        <Right/>
                    </Header>
                    <Content style={styles.container}>
                        <SearchDexuat param={params}/>
                        <SearchBaihat param={params}/>
                        <SearchPlaylist param={params}/>
                    </Content>
                    <Footer nav={this.props.navigation}/>
                </Container>
            </StyleProvider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    }
})