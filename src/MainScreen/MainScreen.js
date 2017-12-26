import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Segment,
    View,
    Thumbnail,
    StyleProvider,
    Drawer
} from 'native-base';
import {Image} from 'react-native';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import SideBar from '../SideBar/SideBar.js';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import OnlineScreen from '../OnlineScreen/OnlineScreen';

import Footer from '@components/footer';
import Manager from '../Api/Manager'

export default class MainScreen extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOnTabOnline: true
        };
        this.footerRef = new Manager();
    }
    closeDrawer = () => {
        this
            .drawer
            ._root
            .close()
    };
    openDrawer = () => {
        this
            .drawer
            ._root
            .open()
    };
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Drawer
                    ref={(ref) => {
                    this.drawer = ref;
                }}
                    content={< SideBar navigator = {
                    this.navigator
                } />}
                    onClose={() => this.closeDrawer()}>
                    <Container>
                        <Header hasTabs hasSegment androidStatusBarColor="#1b668e">
                            <Left>
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                    <Icon name='menu'/>
                                </Button>
                            </Left>
                            <Body>
                                <Segment>
                                    <Button
                                        active={this.state.isOnTabOnline}
                                        first
                                        onPress={() => {
                                        this.setState({isOnTabOnline: true});
                                    }}>
                                        <Text>Online</Text>
                                    </Button>
                                    <Button
                                        active={!this.state.isOnTabOnline}
                                        last
                                        onPress={() => {
                                        this.setState({isOnTabOnline: false});
                                    }}>
                                        <Text>Cá nhân</Text>
                                    </Button>
                                </Segment>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
                                    <Icon name="search"/>
                                </Button>
                            </Right>
                        </Header>
                        {this.state.isOnTabOnline
                            ? <OnlineScreen footer={this.footerRef}/>
                            : <ProfileScreen/>}
                        <Footer
                            nav={this.props.navigation}
                            ref={(ref) => {
                            this
                                .footerRef
                                .setRef(ref);
                        }}/>
                    </Container>
                </Drawer>
            </StyleProvider>
        );
    }
}