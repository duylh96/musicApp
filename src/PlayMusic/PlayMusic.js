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

/*
.body {
    min-height: 100%;
    min-width: 768px;
    width: 100%;
    height: auto;
    margin-top: -12px;
    margin-left: -8px;
    background-size: cover;
    background-image: url('Images/background.png');
    position: fixed;
    overflow-x:hidden;
    overflow-y: hidden;
  
}

.centerInfo {
    position: absolute;
    top: 130px;
    left: 500px;
    background: transparent;
}

#bigImageBorder {
    width: 100%;
    height: 100%;
}

#bigImagePoster {
    top: 6px;
    left: 6px;
    position: absolute;
}

#bigImagePortal {
    position: absolute;
    top: 114px;
    left: -30px;
    animation: portalmove 2s infinite;
}

#pick_border{
    position: absolute;
    top: 0px;
    left: 0px;
    animation: fadeAnimation 1s ease-in alternate;
    animation-play-state: paused;
}

#pick_border:hover{
    animation-play-state: running;
}

#pick_border:not(:hover){
   animation-play-state: paused;
   opacity: 0;
}

#small_img_spider{
    position: absolute;
    top: 7px;
    left: 18px
}

#small_icon_flash{
    position: absolute;
    margin-top: 33px;
    margin-left: -192px;
}

#small_icon_film{
    position: absolute;
    margin-left: -286px;
    margin-top: 7px;
}

#img_detail_line1{
    position: absolute;
    margin-top: 167px;
    margin-left: 935px;
    animation: leftfadeIn;
    animation-duration: 0.7s;
}

#img_detail_line2{
    position: absolute;
    margin-top: 155px;
    margin-left: 1014px;
    animation: horizontalfadeIn;
    animation-duration: 0.7s;
}

@keyframes portalmove {
    0% {
        left: -40px
    }
    50% {
        left: -28px
    }
    100% {
        left: -40px;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes fadeAnimation {
    0%    { opacity:0.4; }
    25%   { opacity:0.6; }
    50%   { opacity:0.8; }
    100%  { opacity:1; }
}

@keyframes leftfadeIn {
    100% { height: 110px; }
    0% { height: 100%; }
}

@keyframes horizontalfadeIn {
    100% { width: 240px; }
    0% { width: 100%; }
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}
  
  /* The typewriter cursor effect */
@keyframes blink-caret {
    from, to { border-color: transparent }
    0% { border-color: white; }
}

/* @keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
}

@keyframes reveal_detail {
    0%  {transform: translate(100%,0);}
    25% {transform: translate( 75%,0);}
    50% {transform: translate( 50%,0);}
    75% {transform: translate( 25%,0);}
    100%{transform: translate(   0,0);}
} */


.Movie_Title {
    display: inline-flex;
    position: absolute;
    left: 429px;
    top: 12px;
    width: 527px;
    height: 67px;
}

.Movie_List_Title1{
    display: flex;
    position: absolute;
    left: 20px;
    top: 121px;
    width: 304px;
    height: 66px;
}

.Movie_List_Title1 p{
    flex: 1;
    color: white;
    font-family: 'Lucida Sans Typewriter';
    font-size: 14px;
    font-style: oblique;
    margin-left: 111px;
    margin-top: 11px;
    -webkit-font-smoothing: antialiased;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
    opacity: 0.69;
}

.Movie_List_Title1 p1{
    flex: 1;
    color: white;
    margin-top: 36px;
    margin-left: -142px;
    font-family: 'Lucida Sans Typewriter';
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
    opacity: 0.69;
}
.Movie_Title p {
    flex: 1;
    color: white;
    font-family: 'Lucida Sans Typewriter';
    font-size: 35px;
    font-style: italic;
    text-align: center;
    align-items: center;
    margin: 0;
    margin-top: 10px;
}
/* 
.Detail{
	display: block;
  	-webkit-animation: reveal_detail .5s cubic-bezier(0.25, 0.25, 0.75, 0.75) ;
} */
.Detail h1{
	margin-top:100px;
	color: white;
	font-weight:300;
  	font-size:20px;
	font-family:'Lucida Sans Typewriter';
  	display:inline-block;
  	overflow:hidden;
  	white-space:nowrap;
}

.Detail p{
	margin-top: 25px;
	width: 200px;
	height:20px;
	color: white;
	font-style: italic;
	font-weight:300;
  	font-size:20px;
	font-family:'Lucida Sans Typewriter';
  	display:inline-block;
  	overflow:hidden;
  	white-space:nowrap;
}

.Detail p1{
	width: 600px;
	height:50px;
	color: white;
	font-weight:300;
  	font-size:15px;
	font-family:'Lucida Sans Typewriter';
}

.Movie_List_Detail{
    display: flex;
    position: absolute;
    top: 135px;
    left: 861px;
    width: 500px;
    height: 300px;
    
}

.Movie_List_Detail p{
    color: white;
    margin-top: 1px;
    margin-left: 160px;
    font-weight: 300;
    font-size: 20px;
    font-family: 'Lucida Sans Typewriter';
    overflow: hidden; /* Ensures the content is not revealed until the animation */
     /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 2.5s steps(40, end),
      blink-caret .75s step-end infinite; 
    
}

/* .Detail:first-of-type {    
	  animation: showup 3s infinite;}
.Detail img{
	position: absolute;
}
.First img{
	top: 90px;
	left: -150px;
}
.Second img{
	top: 150px;
	left: -150px;
}
.Third img{
	top: 220px;
	left: -150px;
}
.Fourth img{
	top: 290px;
	left: -150px;
} */

.Movie_List_Title1:active, .Movie_tag:active{
   
}

*/
