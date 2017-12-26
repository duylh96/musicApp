import React from "react";
import {AppRegistry, Image, StatusBar,StyleSheet} from "react-native";
import {Container, Content, Text, List, ListItem, View, Button, Icon} from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
    render() {
        return (

                <Content>
                    <View style={styles.background}>
                        <Image source={require('../Images/Sidebar/backgroundImg.jpg') } style={styles.backgroundImg}>
                            
                        </Image>
                        <Image source={require('../Images/Sidebar/black.jpg') } style={styles.backgroundImg1}>
                            
                        </Image>

                    </View>
                   
                    <Button transparent androidRippleColor full style ={styles.button_big}  onPress={() => this.props.navigation.navigate("Login")}>
                            <View style={styles.button_normal_view}>
                                <Icon name='ios-person-outline' style={styles.round_bigicon}/>
                                <Text style={styles.text}>Đăng nhập</Text>
                            </View>
                    </Button>
                    {/* Danh sach danh muc */}
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-home-outline' style={styles.icon}/>
                            <Text style={styles.blacktext}>Trang chủ</Text>
                        </View>
                    </Button>
                    
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-musical-notes-outline' style={styles.icon}/>
                            <Text style={styles.blacktext}>Danh sách nhạc</Text>
                        </View>
                    </Button>

                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-list-box-outline' style={styles.icon}/>
                            <Text style={styles.blacktext}>Bảng xếp hạng</Text>
                        </View>
                    </Button>

                    <Button transparent androidRippleColor full style ={styles.button_normal} onPress={() => this.props.navigation.navigate("About")}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-contacts' style={styles.icon}/>
                            <Text style={styles.blacktext}>Liên hệ nhóm</Text>
                        </View>
                    </Button>

                    <Text style={styles.title}>CÀI ĐẶT</Text>

                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-contact-outline' style={styles.icon}/>
                            <Text style={styles.blacktext}>Tài khoản</Text>
                        </View>
                    </Button>
                    
                    <Button transparent androidRippleColor full style ={styles.button_normal}>
                        <View style={styles.button_normal_view}>
                            <Icon name='ios-folder-open-outline' style={styles.icon}/>
                            <Text style={styles.blacktext}>Thư mục</Text>
                        </View>
                    </Button>
                    {/* <List
                        dataArray={routes}
                        renderRow={data => {
                        return (
                            <ListItem button onPress={() => this.props.navigation.navigate(data)}>
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}/> */}
                    
                </Content>
            
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
    },
    background:{
        height:150,
    },

    backgroundImg: {
        height: 130,
        width: '100%',
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
    },
    
    backgroundImg1: {
        position: 'absolute',
        top:0,
        left:0,
        height: 130,
        width: '100%',
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.4,
    },

    button_big: {
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 30,
        left: 20,
        height: 60,
        width: 220,
    },

    button_normal_view: {
        flexDirection: 'row'
    },

    round_bigicon: {
        marginLeft: 10,
        padding:10,
        textAlign: 'center',
        backgroundColor: '#777777',
        borderRadius: 40,
        color: '#ffffff',
        width: 60,
        height: 60,
        fontSize: 40,
      
    },

    icon: {
        marginLeft: 10,
        textAlign: 'center',
        paddingTop: 4,
        backgroundColor: '#2daaed',
        borderRadius: 25,
        width: 37,
        height: 37,
        color: '#ffffff'
    },

    button_normal: {
        justifyContent: 'flex-start',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    },

    text: {
        marginTop: 20,
        color:'#ffffff',
        marginLeft: 10,
    },

    blacktext: {
        marginTop: 7,
        color:'#000000',
        marginLeft: 10,
    },
    
    title: {
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '600',
        fontSize: 18,
    },
});