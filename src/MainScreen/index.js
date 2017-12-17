import React, {Component} from "react";
import MainScreen from './MainScreen'
import SideBar from "../SideBar/SideBar.js";
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import {DrawerNavigator} from "react-navigation";
const MainScreenRouter = DrawerNavigator({
    Home: {
        screen: MainScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    Search: {
        screen: SearchScreen
    }
}, {
    contentComponent: props => <SideBar {...props}/>
});
export default MainScreenRouter;