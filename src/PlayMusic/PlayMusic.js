import React, {Component} from 'react';
import {Container, Content, Button, View, Text, Thumbnail, Icon} from 'native-base';
import {StyleSheet, Image } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}> 
              <View style={styles.part1}>
                    <View style={styles.backgroundImage}> 
                    </View>
                    <View style={styles.backdropImage}>
                        <Image source={require('../Images/BackDrop/0.png')} style={styles.bdImage}/>
                    </View>
              </View>
              <View style={styles.part2}>
                <Text style={styles.bigtext}>Năm Ấy</Text>
                <Text style={styles.smalltext}>Đức Phúc</Text>
                <View style={{flexDirection: 'row', marginTop: 60, alignSelf: 'center'}}>
                    <Icon name='ios-heart-outline' />
                    <Icon name='ios-download-outline' style={{marginLeft: 50}}/>
                    <Icon name='ios-images-outline' style={{marginLeft: 50}}/>
                    <Icon name='ios-share-outline' style={{marginLeft: 50}}/>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, alignSelf: "center"}}>
                     <Text style={{fontSize: 16, color: '#000000'}}>0:26</Text>
                     <View style={{width: '75%', height: 15, backgroundColor: 'black'}} />
                     <Text style={{fontSize:16, color: '#000000'}}>4:20</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, alignSelf: "center"}}>
                    <Icon name='ios-shuffle' />
                    <Icon name='ios-skip-backward' style={{marginLeft: 50}}/>
                    <Icon name='ios-play' style={{marginLeft: 50}}/>
                    <Icon name='ios-skip-forward' style={{marginLeft: 50}}/>
                    <Icon name='menu' style={{marginLeft: 50}}/>
                </View>
              </View>
            </View>

        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
    },
    part1:{
        position: 'absolute',
        top: 0,
        left: 0,
        height: 360,
        width: '100%',  
        backgroundColor: '#d6d6d4',
    },
    part2:{
        position: 'absolute',
        top: 360,
        left: 0,
        height: 360,
        width: '100%',  
        backgroundColor: '#d6d6d4',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 270,
        width: '100%',
        backgroundColor: '#513e33',
    },
    backdropImage: {
        position: 'absolute',
        top: 60,
        left: 40,
        height: 300,
        width: '80%',
        backgroundColor: 'green',
    },
    bdImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 300,
        width: '100%',
        backgroundColor: 'green',
    },
    contentBackground: {
        backgroundColor: '#dbd7d4',
    },
    smalltext: {
        color:'#000000',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5,
       
    },
    bigtext: {
        color:'#000000',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15,
       
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
      }
});
