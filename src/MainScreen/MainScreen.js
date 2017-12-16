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
    Footer,
    FooterTab,
    View,
    Thumbnail,
    StyleProvider,
    Drawer
} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import SideBar from '../SideBar/SideBar.js';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import OnlineScreen from '../OnlineScreen/OnlineScreen';

export default class MainScreen extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOnTabOnline: true
        };
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
                                <Button transparent>
                                    <Icon name="search"/>
                                </Button>
                            </Right>
                        </Header>
                        {this.state.isOnTabOnline
                            ? <OnlineScreen/>
                            : <ProfileScreen/>}
                        <Footer>
                            <FooterTab>
                                <Button light androidRippleColor onPress={()=>this.props.navigation.navigate('Play')}>
                                    <View style={styles.footer}>
                                        <Thumbnail source={require('../Images/Disks/0.jpg')}/>
                                        <View style={styles.footer_title}>
                                            <Text style={styles.text_title}>Title</Text>
                                            <Text style={styles.text_sub_title}>Sub Title</Text>
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
                </Drawer>
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