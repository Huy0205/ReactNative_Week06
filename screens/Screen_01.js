import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const Screen_01 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'space-between'}}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to Cafe world</Text>
      </View>
      <View style={{flex: 1,  alignItems: 'center'}}>
        <Image source={require('../assets/Image.png')} style={{width: 200, height: 60, borderRadius: 8}}/>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={require('../assets/Image.png')} style={{width: 200, height: 60, borderRadius: 8}}/>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={require('../assets/Image.png')} style={{width: 200, height: 60, borderRadius: 8}}/>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable style={{backgroundColor: '#00BDD6', paddingVertical: 12, paddingHorizontal: 110, borderRadius: 8}}
          onPress={()=>{
            navigation.navigate('Screen02')
          }}
        >
            <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>GET STARTED</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_01;