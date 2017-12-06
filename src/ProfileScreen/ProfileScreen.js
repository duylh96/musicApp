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

export default class ProfileScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOnTabOnline: false
        };
        this.onOnlineClick = this
            .onOnlineClick
            .bind(this);
    }
    onOnlineClick = () => {
        this.setState({isOnTabOnline: true});
        this
            .props
            .navigation
            .navigate("Home");
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
                                    <Button active={this.state.isOnTabOnline} first onPress={this.onOnlineClick}>
                                        <Text>Online</Text>
                                    </Button>
                                    <Button active={!this.state.isOnTabOnline} last>
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
                    </Container>
                </Drawer>
            </StyleProvider>
        )
    }
}
