import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Segment,
    Tab,
    Tabs,
    StyleProvider,
    Drawer
} from 'native-base';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import SideBar from '../SideBar/SideBar.js';
import HomeScreen from '../HomeScreen/HomeScreen';
import BXHScreen from '../BXHScreen/BXHScreen';
import PlaylistScreen from '../PlaylistScreen/PlaylistScreen';

export default class MainScreen extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOnTabOnline: true
        };
        this.onProfileClick = this
            .onProfileClick
            .bind(this);
    }
    onProfileClick = () => {
        this.setState({isOnTabOnline: false});
        this
            .props
            .navigation
            .navigate("Profile");
    };
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
                                    <Button active={this.state.isOnTabOnline} first>
                                        <Text>Online</Text>
                                    </Button>
                                    <Button active={!this.state.isOnTabOnline} last onPress={this.onProfileClick}>
                                        <Text>Cá nhân</Text>
                                    </Button>
                                </Segment>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon name="search"/>
                                </Button>
                            </Right>
                        </Header>
                        <Tabs initialPage={0}>
                            <Tab heading="Trang Chủ">
                                <HomeScreen/>
                            </Tab>
                            <Tab heading="Playlist">
                                <PlaylistScreen/>
                            </Tab>
                            <Tab heading="BXH">
                                <BXHScreen/>
                            </Tab>
                        </Tabs>
                    </Container>
                </Drawer>
            </StyleProvider>
        );
    }
}