import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App(navigation, route) {

  /*

   */

  const [imaged, setImgaged] =
      useState(<Image style={{height: '440px', width: '350px'}} source={require('../Pt1/assets/img/vs_blue.png')}></Image>);

  const VsBlack = () => {
    setImgaged(<Image style={{height: '440px', width: '350px'}} source={require("../Pt1/assets/img/vs_black.png")}></Image>)
  };
  const VsBlue = () => {
    setImgaged(<Image style={{height: '440px', width: '350px'}} source={require("../Pt1/assets/img/vs_blue.png")}></Image>)
  };
  const VsRed = () => {
    setImgaged(<Image style={{height: '440px', width: '350px'}} source={require("../Pt1/assets/img/vs_red.png")}></Image>)
  };
  const VsSilver = () => {
    setImgaged(<Image style={{height: '440px', width: '350px'}} source={require("../Pt1/assets/img/vs_silver.png")}></Image>)
  };

  /*

   */
  const navtoPage2 = () => {
    navigation.navigate('2', {image: imaged.})
  }

  /*
  UI
   */
  return (
      <View style={styles.container}>
        <View style={{flex: 5}}>
          {imaged}
        </View>
        <View style={{flex: 3}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Text>(Xem 828 đánh giá)</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <Text style={{fontWeight: 'bold'}}>1.790.000 đ</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={{color: '#FA0000'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
          <View style={{flex:1, alignContent: 'center'}}>
            <TouchableOpacity style={{alignContent: 'center'}} onPress={navtoPage2}>
              <Text style={{alignContent: 'center'}}>4 MÀU-CHỌN MÀU</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Button title={"CHỌN MUA"}></Button>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
