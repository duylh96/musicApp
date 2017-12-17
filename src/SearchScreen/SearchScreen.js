import React, {Component} from 'react'
import {
    Container,
    Header,
    View,
    Left,
    Body,
    Right,
    Footer,
    FooterTab,
    Item,
    Input,
    Icon,
    Button,
    Text,
    StyleProvider
} from 'native-base';
import {StyleSheet} from 'react-native';
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
    }
    onHotKeyClick = () => {
        let query = this.state.hot_key[
            this
                .refs
                .flow
                .getSelectedPosition()
        ];
        this.setState({search_query: query});
    };
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header searchBar rounded>
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
                        <Button transparent>
                            <Icon name='microphone'/>
                        </Button>
                    </Header>
                    <Body style={styles.container}>
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
                                <Button>
                                    <Icon name='cancel'/>
                                </Button>
                            </View>
                        </View>
                    </Body>
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
    item_text: {
        flex: 1
    },
    view_title: {
        flexDirection: 'row'
    }
});