import React, {Component} from "react";
import {Root} from 'native-base';
import {DrawerNavigator} from "react-navigation";
import SideBar from "./src/SideBar/SideBar";
import MainScreen from './src/MainScreen';
import LoginScreen from './src/LoginScreen/LoginScreen.js';
import AboutScreen from './src/AboutScreen/AboutScreen.js'

const RootRouter = DrawerNavigator({
  Home: {
    screen: MainScreen
  },
  Login:{
    screen: LoginScreen
  },
  About:{
    screen: AboutScreen
  }
  
}, {
  contentComponent: props => <SideBar {...props}/>
});

export default class LikeMusicApp extends Component {
  render() {
    return (
      <Root><RootRouter/></Root>
    );
  }
}