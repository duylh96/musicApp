import React, {Component} from 'react';
import {Text,  View, Icon} from 'native-base';
import {StyleSheet, Image} from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.imgBG}>
                    <Image style={styles.imgBG}  source={require('../Images/About/react_native.png')} ></Image>
               </View>
               <View style={styles.groupIcon}>
                    <Icon name='ios-add-outline' style={styles.round_icon}></Icon>
                    <Text style={styles.round_icon1}>D</Text>
                    <Text style={styles.round_icon2}>Đ</Text>
                    <Text style={styles.round_icon3}>S</Text>
               </View>
        </View>
        )
    }
}


const styles=StyleSheet.create({
    container: {
        flex: 1
    },

    imgBG: {
        height: 200, 
        width: '100%',
    },

    groupIcon: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 30,
    },

    round_icon: {
        marginLeft: 30,
        paddingTop: 10,
        textAlign: 'center',
        borderRadius: 30,
        width: 50,
        height: 50,
        fontSize: 30,
        color: '#ffffff',
        backgroundColor: '#999999'
    },
    
    round_icon1: {
        marginLeft: -10,
        paddingTop: 5,
        textAlign: 'center',
        borderRadius: 30,
        width: 50,
        height: 50,
        fontSize: 30,
        color: '#ffffff',
        backgroundColor: '#444444'
    },

    round_icon2: {
        marginLeft: -10,
        paddingTop: 5,
        textAlign: 'center',
        borderRadius: 30,
        width: 50,
        height: 50,
        fontSize: 30,
        color: '#ffffff',
        backgroundColor: '#333333'
    },

    round_icon3: {
        marginLeft: -10,
        paddingTop: 5,
        textAlign: 'center',
        borderRadius: 30,
        width: 50,
        height: 50,
        fontSize: 30,
        color: '#ffffff',
        backgroundColor: '#333333'
    },

});