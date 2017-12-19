import React, {Component} from 'react'
import {
    Container,
    Header,
    View,
    Left,
    Body,
    Right,
    Content,
    Footer,
    FooterTab,
    Item,
    Input,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    Thumbnail,
    StyleProvider
} from 'native-base';
import {StyleSheet, Alert} from 'react-native';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import Flowlayout from 'react-native-flowlayout';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_query: '',
            hot_key: [
                'chi dan',
                'thay la yeu thuong',
                'coming home',
                'save me',
                'bao anh',
                'karik',
                'christmas',
                'despacito',
                'mr siro',
                'khoi my'
            ],
            history: [
                {
                    key: 'abc'
                }, {
                    key: 'xyz'
                }
            ]
        };
        this.onHotKeyClick = this
            .onHotKeyClick
            .bind(this);
        this.deleteAllHistory = this
            .deleteAllHistory
            .bind(this);
    }
    onHotKeyClick = () => {
        let query = this.state.hot_key[
            this
                .refs
                .flow
                .getSelectedPosition()
        ];
        this.setState({search_query: query});
        this
            .props
            .navigation
            .navigate('result');
    };
    deleteAllHistory = () => {
        Alert.alert('', 'Bạn muốn xóa lịch sử tìm kiếm?', [
            {
                text: 'BỎ QUA',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'XÓA',
                onPress: () => console.log('OK Pressed')
            }
        ], {cancelable: false})
    };
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header searchBar rounded androidStatusBarColor="#1b668e">
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name='ios-arrow-back'/>
                        </Button>
                        <Item>
                            <Icon name="ios-search"/>
                            <Input
                                onChangeText={(text) => this.setState({search_query: text})}
                                value={this.state.search_query}
                                placeholder="Search"/>
                        </Item>
                        <Button
                            style={{
                            marginLeft: 5
                        }}
                            transparent>
                            <Icon name='ios-mic-outline'/>
                        </Button>
                    </Header>
                    <Content
                        style={{
                        paddingLeft: 15
                    }}>
                        <View>
                            <Text style={styles.title}>TỪ KHOÁ HOT</Text>
                            <Flowlayout
                                ref='flow'
                                dataValue={this.state.hot_key}
                                multiselect={false}
                                onClicked={this.onHotKeyClick}/>
                        </View>
                        <View>
                            <View style={styles.view_title}>
                                <Text style={styles.title}>LỊCH SỬ TÌM KIẾM</Text>
                                <Button
                                    onPress={this.deleteAllHistory}
                                    style={{
                                    marginTop: 15
                                }}
                                    transparent
                                    androidRippleColor>
                                    <Text
                                        style={{
                                        fontStyle: 'normal',
                                        fontSize: 12
                                    }}>xóa</Text>
                                </Button>
                            </View>
                            <List
                                dataArray={this.state.history}
                                renderRow={(item) => <ListItem
                                style={{
                                backgroundColor: 'transparent'
                            }}>
                                <Button
                                    transparent
                                    androidRippleColor
                                    height={55}
                                    onPress={() => this.setState({search_query: item.key})}>
                                    <View style={styles.item_history}>
                                        <View
                                            style={{
                                            flexDirection: 'row'
                                        }}>
                                            <Icon
                                                style={{
                                                alignSelf: 'center'
                                            }}
                                                name='ios-time-outline'/>
                                            <Text
                                                style={{
                                                alignSelf: 'center',
                                                marginLeft: 20
                                            }}>{item.key}</Text>
                                        </View>
                                        <Button style={styles.button_delete} transparent androidRippleColor>
                                            <Icon name='ios-close'/>
                                        </Button>
                                    </View>
                                </Button>
                            </ListItem>}></List>
                        </View>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button
                                light
                                androidRippleColor
                                onPress={() => this.props.navigation.navigate('Play')}>
                                <View style={styles.footer}>
                                    <Thumbnail source={require('../Images/Disks/0.jpg')}/>
                                    <View style={styles.footer_title}>
                                        <Text style={styles.text_title}>LikeMusic</Text>
                                        <Text style={styles.text_sub_title}>Nghe nhạc mọi lúc mọi nơi</Text>
                                    </View>
                                    <View style={styles.footer_play_area}>
                                        <Button androidRippleColor transparent>
                                            <Icon
                                                name="md-play"
                                                style={{
                                                color: '#2daaed'
                                            }}/>
                                        </Button>
                                        <Button androidRippleColor transparent>
                                            <Icon
                                                name="md-skip-forward"
                                                style={{
                                                color: '#2daaed'
                                            }}/>
                                        </Button>
                                        <Button androidRippleColor transparent>
                                            <Icon
                                                name="menu"
                                                style={{
                                                color: '#2daaed'
                                            }}/>
                                        </Button>
                                    </View>
                                </View>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 20
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        fontWeight: '400'
    },
    item_button: {},
    item_text: {},
    view_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    button_delete: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_history: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    footer_title: {
        marginLeft: 18
    },
    text_title: {
        marginTop: 5,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    text_sub_title: {
        textAlign: 'left',
        fontWeight: '100'
    },
    footer_play_area: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});