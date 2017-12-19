import React, {Component} from "react";
import MainScreen from './MainScreen';
import SearchScreen from '../SearchScreen/index';
import PlayScreen from '../PlayMusic/PlayMusic';
import {StackNavigator} from "react-navigation";
const MainScreenRouter = StackNavigator({
    Home: {
        screen: MainScreen
    },
    Search: {
        screen: SearchScreen
    },
    Play: {
        screen: PlayScreen
    }
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
});
export default MainScreenRouter;