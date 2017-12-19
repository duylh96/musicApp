import React, {Component} from 'react';
import SearchScreen from './SearchScreen';
import SearchResultScreen from './SearchResultScreen';
import {StackNavigator} from 'react-navigation';

export default SearchRouter = StackNavigator({
    search: {
        screen: SearchScreen
    },
    result: {
        screen: SearchResultScreen
    }
}, {
    headerMode: 'none',
    initialRouteName: 'search'
});