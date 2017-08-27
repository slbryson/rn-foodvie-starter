import React from "react";
import { AppRegistry, Image, View, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "BlankPage2"];
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Image
              style={{
              height: 30,
              width: 110,
              alignSelf: "center",
              //justifyContent: "center",
              //alignItems: "flex-start"
              }}
              source={
                //uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
              // uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/img/drawer-cover.png"
              //}
              require('../../../images/foodvie3.png')
              }

            />
          </View>
          
          <View>
            <TouchableOpacity
              style={{
                height: 120,
                width: 60,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              <Image                
                style= {{
                  height: 50,
                  width:  100,
                  justifyContent: "center"
                }}
                source={
                  require('../../../images/peers.png')
                  //uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/img/drawer-cover.png"
                  //uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                }
              />
            </TouchableOpacity>
          </View>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}-See Me Bryson</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
