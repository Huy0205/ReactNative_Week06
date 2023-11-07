import { View, Text, SafeAreaView, FlatList, Pressable } from "react-native";
import React from "react";

const Screen_03 = () => {
  const data = [{}];
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={() => {
          return <View></View>;
        }}
      />
      <View>
        <Pressable style={{backgroundColor: '#EFB034'}}>
          <Text>GO TO CAST</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_03;
