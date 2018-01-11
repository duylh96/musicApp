import React, {Component} from 'react'
import {
    Container,
    Header,
    View,
    Left,
    Body,
    Right,
    Content,
    Item,
    Input,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    StyleProvider
} from 'native-base';
import {StyleSheet, Alert} from 'react-native';
import getTheme from '../native-base-theme/components/';
import material from '../native-base-theme/variables/material';
import Flowlayout from 'react-native-flowlayout';
import Footer from '@components/footer';
import {listHotKey} from '../Api/DataBase';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_query: '',
            hot_key: listHotKey,
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
        this.onSubmit = this
            .onSubmit
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
            .navigate('result', {search_query: query});
    };
    onSubmit = () => {
        this
            .props
            .navigation
            .navigate('result', {search_query: this.state.search_query});
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
                <Container style={styles.container}>
                    <Header searchBar rounded androidStatusBarColor="#1b668e">
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name='ios-arrow-back'/>
                        </Button>
                        <Item>
                            <Icon name="ios-search"/>
                            <Input
                                onChangeText={(text) => this.setState({search_query: text})}
                                onSubmitEditing={this.onSubmit}
                                value={this.state.search_query}
                                placeholder="Tìm kiếm"/>
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
                                backgroundColor: 'transparent',
                                marginLeft: 5
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
                    <Footer nav={this.props.navigation}/>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
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
    }
});