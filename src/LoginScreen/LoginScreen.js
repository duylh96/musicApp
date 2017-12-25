import React, {Component} from 'react';
import {Container, Content, Text, Icon, Button, View} from 'native-base';
import {StyleSheet, Image, TextInput} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Images/LoginScreen/LoginScreen.jpg')} style={styles.imageBG}></Image>
                <Image source={require('../Images/LoginScreen/Black.jpg')} style={styles.imageBlur}></Image>
                <View style={styles.loginBorder}>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={[styles.inputView,styles.marginTop]}>
                        <TextInput style={styles.input}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1
    },

    imageBG: {
        width: '100%',
        height: '100%', 
    },

    imageBlur: {
        position: 'absolute' ,
        top: 0,
        left:0,
        alignSelf: "stretch",
        width: '100%',
        height: '100%', 
        opacity: 0.7,
    },
    loginBorder: {
        position: 'absolute',
        top: 100,
        left: 0,
        width: '100%',
        height: 350,
    },

    inputView: {
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 5,
        paddingRight: 5
    },

    input: {
        height: 40,
        padding: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        color:'#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    marginTop: {
        marginTop: 20,
    }
});