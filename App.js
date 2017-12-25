import React, {Component} from "react";
import {Root} from 'native-base';
import {DrawerNavigator} from "react-navigation";
import SideBar from "./src/SideBar/SideBar";
import MainScreen from './src/MainScreen';

const RootRouter = DrawerNavigator({
  Home: {
    screen: MainScreen
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