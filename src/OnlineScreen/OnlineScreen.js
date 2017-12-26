import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
    Tab,
    Tabs,
    Button
} from 'native-base';

import HomeScreen from '../HomeScreen/HomeScreen';
import BXHScreen from '../BXHScreen/BXHScreen';
import PlaylistScreen from '../PlaylistScreen/PlaylistScreen';

export default class OnlineScreen extends Component {
    render() {
        return (
            <Tabs initialPage={0}>
                <Tab heading="Trang Chủ">
                    <HomeScreen footer={this.props.footer}/>
                </Tab>
                <Tab heading="Playlist">
                    <PlaylistScreen/>
                </Tab>
                <Tab heading="BXH">
                    <BXHScreen/>
                </Tab>
            </Tabs>
        )
    }
}