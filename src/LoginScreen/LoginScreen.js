import React, {Component} from 'react';
import {Text, Icon, Button, View} from 'native-base';
import {
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    onButtonPress,
    Alert,
    ToastAndroid
} from 'react-native';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            passWord: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../Images/LoginScreen/LoginScreen.jpg')}
                    style={styles.imageBG}></Image>
                <Image
                    source={require('../Images/LoginScreen/Black.jpg')}
                    style={styles.imageBlur}></Image>
                <View style={styles.loginBorder}>
                    <TextInput
                        style={styles.newInput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Tên đăng nhập'
                        underlineColorAndroid="transparent"
                        selectionColor='#ffffff'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        value={this.state.userName}
                        onChangeText={(value) => {
                        this.setState({userName: value})
                    }}/>

                    <TextInput
                        style={styles.newInput}
                        placeholder='Mật khẩu'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        selectionColor='#ffffff'
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        value={this.state.passWord}
                        onChangeText={(value) => {
                        this.setState({passWord: value})
                    }}/>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        // if(this.state.userName.localeCompare('admin')!=0)
                        // {
                        //    ToastAndroid.show('Tên đăng nhập không hợp lệ!',ToastAndroid.SHORT);
                        //    return;
                        // }
    
                        // if(this.state.passWord.localeCompare('admin')!=0)
                        // {
                        //    ToastAndroid.show('Mật khẩu không hợp lệ',ToastAndroid.SHORT);
                        //    return;
                        // }
                        if(this.state.userName===null || this.state.passWord===null)
                        {
                            ToastAndroid.show("Dữ liệu không được phép trống!",ToastAndroid.SHORT);
                            return;

                        }
                        else{
                            if(this.state.userName==="admin" && this.state.passWord==="123654")
                            {
                                ToastAndroid.show("Đăng nhập thành công!",ToastAndroid.SHORT);
                            }
                            else
                                ToastAndroid.show("Tên hoặc mật khẩu bị sai! Vui lòng kiểm tra lại",ToastAndroid.SHORT);
                        }
                       


                    }}>
                        <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onButtonPress}>
                        <Text style={styles.registerText}>Chưa có tài khoản? Đăng kí ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imageBG: {
        width: '100%',
        height: '100%'
    },

    imageBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        alignSelf: "stretch",
        width: '100%',
        height: '100%',
        opacity: 0.7
    },

    loginBorder: {
        position: 'absolute',
        top: 150,
        left: 0,
        width: '100%',
        height: 350
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
        color: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'transparent'
    },

    marginTop: {
        marginTop: 20
    },

    newInput: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20
    },

    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        marginTop: 10
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },

    registerText: {
        fontSize: 14,
        color: '#ffffff',
        marginTop: 10,
        alignSelf: 'center'
    }
});