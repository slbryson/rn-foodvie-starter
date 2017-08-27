import React, { Component } from "react";
import { connect } from "react-redux";
import { AppRegistry, Image, View, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

class BlankPage2 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Foodvie 2nd Blank page</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>
            Bryson this 2 Create Something Awesome . . .
          </Text>

        </Content>
        <Content >
        <View   style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <View stype={{width: 50, height: 90, backgroundColor: 'steelblue'}} />
            <Image style={{
            width: 250,
            height: 50,
            backgroundColor: 'steelblue',
            }}
              source={require('../../../images/foodvie3.png')}
            />
            </View>
        </Content>
      </Container>
    );
  }
}

export default BlankPage2;
