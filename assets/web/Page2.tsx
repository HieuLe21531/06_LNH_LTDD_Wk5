import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App(navigation, route) {

  /*

   */
  const [imaged, setImgaged] =
      useState(<Image style={{height: '100px', width: '100px'}} source={require('../Pt1/assets/img/vs_blue.png',)}></Image>);

  const VsBlack = () => {
    setImgaged(<Image style={{height: '100px', width: '100px'}} source={require("../Pt1/assets/img/vs_black.png")}></Image>)
  };
  const VsBlue = () => {
    setImgaged(<Image style={{height: '100px', width: '100px'}} source={require("../Pt1/assets/img/vs_blue.png")}></Image>)
  };
  const VsRed = () => {
    setImgaged(<Image style={{height: '100px', width: '100px'}} source={require("../Pt1/assets/img/vs_red.png")}></Image>)
  };
  const VsSilver = () => {
    setImgaged(<Image style={{height: '100px', width: '100px'}} source={require("../Pt1/assets/img/vs_silver.png")}></Image>)
  };

  /*

   */
  const navtoPage1 = () => {
    navigation.navigate('1', {image: imaged})
  }

  return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            {imaged}
          </View>
          <View style={{flex: 3, alignItems: 'flex-start', flexWrap: 'wrap'}}>
            <Text>Điện Thoại Vsmart Joy 3</Text>
            <Text>Hàng chính hãng</Text>
          </View>
        </View>
        <View style={{flex: 3, backgroundColor: '#c4c4c4', flexDirection: 'column'}}>
          <View style={{flex: 1, alignItems:'flex-start'}}>
            <Text>Chọn một màu bên dưới:</Text>
          </View>
          <View style={styles.choosing}>
            <TouchableOpacity onPress={VsSilver} style={styles.to}>
              <Image source={require('../Pt1/assets/img/Silver.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.choosing}>
            <TouchableOpacity onPress={VsRed} style={styles.to}>
              <Image source={require('../Pt1/assets/img/Red.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.choosing}>
            <TouchableOpacity onPress={VsBlack} style={styles.to}>
              <Image source={require('../Pt1/assets/img/Black.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.choosing}>
            <TouchableOpacity onPress={VsBlue} style={styles.to}>
              <Image source={require('../Pt1/assets/img/Blue.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}>
            <Button title={'Xong'} onPress={navtoPage1}></Button>
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
  choosing:{
    flex: 3,
    alignItems: 'center',
  },
  to: {
    width: '100%',
    height: '100%'
  }
});
