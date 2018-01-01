import React, {Component} from 'react';
import {Text, View, Icon, Button} from 'native-base';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgBG}>
                    <Image
                        style={styles.imgBG}
                        source={require('../Images/About/react_native.png')}></Image>
                </View>
                <View style={styles.groupIcon}>
                    <TouchableOpacity>
                        <Icon name='ios-add-outline' style={styles.round_icon}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.round_icon1}>D</Text>
                    <Text style={styles.round_icon2}>Đ</Text>
                    <Text style={styles.round_icon3}>S</Text>
                </View>
                <Button transparent androidRippleColor full style ={styles.button_normal}>
                    <View style={styles.button_normal_view}>
                        <Icon name='ios-contacts' style={styles.icon}/>
                        <Text style={styles.title}>Danh sách thành viên</Text>
                    </View>
                </Button>
                <View style={styles.memberContainer}>
                    <View style={styles.infoBar}></View>
                    <Image source={require('../Images/About/Duy.png')} style={styles.memberInfo}></Image>
                    <Text style={styles.textInfo}>
                        Lương Hoàng Duy
                    </Text>
                </View>
                <View style={styles.memberContainer}>
                    <View style={styles.infoBar}></View>
                    <Image source={require('../Images/About/Dat.png')} style={styles.memberInfo}></Image>
                    <Text style={styles.textInfo}>
                        Phạm Kim Đạt
                    </Text>
                </View>
                <View style={styles.memberContainer}>
                    <View style={styles.infoBar}></View>
                    <Image source={require('../Images/About/Sy.png')} style={styles.memberInfo}></Image>
                    <Text style={styles.textInfo}>
                        Nguyễn Huỳnh Tuấn Sỹ
                    </Text>
                </View>
                <View style={styles.treeBar}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imgBG: {
        height: 200,
        width: '100%'
    },

    groupIcon: {
        flexDirection: 'row',
        marginTop: 0,
        alignSelf: 'center',
        marginTop: 20
    },

    round_icon: {
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
        backgroundColor: '#FF6633'
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
        backgroundColor: '#660066'
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
        backgroundColor: '#000099'
    },

    icon: {
        marginLeft: 10,
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 5,
        backgroundColor: '#2daaed',
        borderRadius: 20,
        width: 40,
        height: 40,
        color: '#ffffff'
    },

    button_normal: {
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 5
    },

    button_normal_view: {
        flexDirection: 'row',
        marginTop: 15
    },

    title: {
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 10,
        fontWeight: '600',
        fontSize: 20
    },

    memberContainer: {
        marginTop: 20,
        marginLeft: 40,
        flexDirection: 'row'
    },

    infoBar: {
        backgroundColor: '#000000',
        marginTop: 20,
        width: 40,
        height: 5
    },

    memberInfo: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginLeft: 2,
        alignSelf: "stretch"
    },

    textInfo: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 18,
        fontWeight: '400'
    },

    treeBar: {
        position: 'absolute',
        top: 335,
        left: 30,
        width: 10,
        height: 185,
        backgroundColor: '#000000'
    }

});