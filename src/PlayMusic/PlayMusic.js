import React, {Component} from 'react';
import {
    Container,
    Content,
    Button,
    View,
    Text,
    Thumbnail,
    Icon
} from 'native-base';
import {
    StyleSheet,
    Image,
    Slider,
    constructor,
    TextInput,
    StatusBar
} from 'react-native';

var secondstoMMSS = function (totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - (minutes * 60);
    seconds = Math.round(seconds);
    var result = minutes;
    result += ":" + (seconds < 10
        ? "0" + seconds
        : seconds);
    return result;
}

var maxWidth = 250;
var btnName='ios-pause';
export default class PlayMusic extends Component {
    constructor(props) {
        super(props);
        this.param = this.props.navigation.state.params;
        this.state = {
            playing: false,
            startTime: 0,
            endTime: secondstoMMSS(this.param.currentSong.content.getDuration()),
            playbtnName: btnName
        }
    }

    playOrResume = () => {
        if(btnName.equals('ios-pause'))
        {
            btnName='ios-play'
            this.state.playbtnName.setState({playbtnName:btnName});
        }
        else{
            btnName='ios-pause'
            this.state.playbtnName.setState({playbtnName:btnName});
        }
        this
            .param.currentSong
            .content
            .play();

        this
            .param.currentSong
            .content.setNumberOfLoops(-1);
          
            
      
    };
    pause = () => {
     
      
        this.param
            .currentSong
            .content
            .pause();
        
    };
    onButtonPlayPress = () => {
        var strbtnPlay="ios-play"
        var strbtnPause="ios-pause"
       
        if(this.state.playbtnName=strbtnPlay)
        {
                this.setState({playbtnName:strbtnPause}); 
        }
        if(this.state.playbtnName=strbtnPause)
        {
                this.setState({ playbtnName:strbtnPlay}); 
        }
       
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={this.param.currentSong.backgroundColor}
                    barStyle="light-content"/>
                <View style={styles.part1}>
                    <View
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: 270,
                        width: '100%',
                        backgroundColor: this.param.currentSong.backgroundColor
                    }}></View>
                    <View
                        style={{
                        position: 'absolute',
                        top: 3,
                        left: 3
                    }}>
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name='ios-arrow-down-outline' style={styles.icon}/>
                        </Button>
                    </View>
                    <View style={styles.backdropImage}>
                        <Image source={this.param.currentSong.image} style={styles.bdImage}/>
                    </View>
                </View>
                <View style={styles.part2}>
                    <Text style={styles.bigtext}>{this.param.currentSong.name}</Text>
                    <Text style={styles.smalltext}>{this.param.currentSong.singer}</Text>
                    <View
                        style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-between',
                        paddingLeft: 50,
                        paddingRight: 50
                    }}>
                        <Button transparent>
                            <Icon name='ios-heart-outline' style={styles.buttonStyle}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-download-outline' style={styles.buttonStyle}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-images-outline' style={styles.buttonStyle}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-share-outline' style={styles.buttonStyle}/>
                        </Button>
                    </View>

                    <View style={styles.groupIconContainer}>
                        <Text
                            style={{
                            fontSize: 16,
                            color: '#000000'
                        }}>{secondstoMMSS(this.state.startTime)}</Text>

                        <View
                            style={{
                            marginTop: 2,
                            width: maxWidth
                        }}>
                            <Slider
                                minimumTrackTintColor='#000000'
                                thumbTintColor='#000000'
                                step={maxWidth / this
                                .param
                                .currentSong
                                .content
                                .getDuration()}
                                minimumValue={0}
                                value={this.state.startTime}
                                maximumValue={this
                                .param
                                .currentSong
                                .content
                                .getDuration()}
                                onValueChange={(val) => {
                                this.setState({startTime: val});
                                this
                                    .param
                                    .currentSong
                                    .content
                                    .setCurrentTime(val);
                            }}/>
                        </View>
                        <Text
                            style={{
                            fontSize: 16,
                            color: '#000000'
                        }}>{this.state.endTime}</Text>

                    </View>

                    <View style={styles.groupIconContainer1}>
                        <Button transparent>
                            <Icon name='ios-shuffle' style={styles.buttonStyle}/>
                        </Button>
                        <Button transparent>
                            <Icon name='md-skip-backward' style={styles.buttonStyle}/>
                        </Button>
                        <Button transparent style={styles.buttonPlay} >
                            <Icon name={this.state.playbtnName} style={styles.iconPlay} onPress={playOrResume}  />
                        </Button>
                        <Button transparent>
                            <Icon name='md-skip-forward' style={styles.buttonStyle} onPress={pause}/>
                        </Button>
                        <Button transparent>
                            <Icon name='menu' style={styles.buttonStyle}/>
                        </Button>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    part1: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 360,
        width: '100%',
        backgroundColor: '#d6d6d4'
    },

    part2: {
        position: 'absolute',
        top: 360,
        left: 0,
        height: 360,
        width: '100%',
        backgroundColor: '#d6d6d4'
    },

    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 270,
        width: '100%',
        backgroundColor: '#513e33'
    },

    backdropImage: {
        position: 'absolute',
        top: 60,
        left: 40,
        height: 300,
        width: '80%',
        backgroundColor: 'green'
    },

    bdImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 300,
        width: '100%',
        backgroundColor: 'green'
    },

    contentBackground: {
        backgroundColor: '#dbd7d4'
    },

    smalltext: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5
    },

    bigtext: {
        color: '#000000',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15
    },

    text: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    },

    buttonStyle: {
        color: '#000000'
    },

    buttonMargin: {
        marginLeft: 50
    },

    icon: {
        textAlign: 'center',
        backgroundColor: '#111111',
        paddingTop: 2,
        borderRadius: 25,
        color: '#ffffff',
        width: 25,
        height: 25
    },

    buttonPlay: {
        backgroundColor: '#000000',
        marginTop: 5,
        borderRadius: 20,
        width: 40,
        height: 40
    },

    iconPlay: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    },

    groupIconContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },

    groupIconContainer1: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    }
});
