import React, {Component} from 'react';
import {
    Container,
    Header,
    View,
    Left,
    Body,
    Right,
    Content,
    Footer,
    FooterTab,
    Item,
    Input,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    Thumbnail,
    StyleProvider
} from 'native-base';
import {StyleSheet, Alert} from 'react-native';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';

import SearchDexuat from '@components/search-dexuat'

import SearchBaihat from '@components/search-baihat'

import SearchPlaylist from '@components/search-playlist'

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
                    <Content>
                        <SearchDexuat param={params}/>
                        <SearchBaihat param={params}/>
                        <SearchPlaylist param={params}/>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button
                                light
                                androidRippleColor
                                onPress={() => this.props.navigation.navigate('Play')}>
                                <View style={styles.footer}>
                                    <Thumbnail source={require('../Images/Disks/0.jpg')}/>
                                    <View style={styles.footer_title}>
                                        <Text style={styles.text_title}>LikeMusic</Text>
                                        <Text style={styles.text_sub_title}>Nghe nhạc mọi lúc mọi nơi</Text>
                                    </View>
                                    <View style={styles.footer_play_area}>
                                        <Button androidRippleColor transparent>
                                            <Icon
                                                name="md-play"
                                                style={{
                                                color: '#2daaed'
                                            }}/>
                                        </Button>
                                        <Button androidRippleColor transparent>
                                            <Icon
                                                name="md-skip-forward"
                                                style={{
                                                color: '#2daaed'
                                            }}/>
                                        </Button>
                                        <Button androidRippleColor transparent>
                                            <Icon
                                                name="menu"
                                                style={{
                                                color: '#2daaed'
                                            }}/>
                                        </Button>
                                    </View>
                                </View>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    footer_title: {
        marginLeft: 18
    },
    text_title: {
        marginTop: 5,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    text_sub_title: {
        textAlign: 'left',
        fontWeight: '100'
    },
    footer_play_area: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});