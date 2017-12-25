import React, {Component} from "react";
import {DrawerNavigator} from "react-navigation";
import SideBar from "./src/SideBar/SideBar";
import MainScreen from './src/MainScreen';
import LoginScreen from './src/LoginScreen/LoginScreen.js';

const RootRouter = DrawerNavigator({
  Home: {
    screen: MainScreen
  },
  Login:{
    screen:LoginScreen
  }
  
}, {
  contentComponent: props => <SideBar {...props}/>
});

export default class LikeMusicApp extends Component {
  render() {
    return <RootRouter/>;
  }
}