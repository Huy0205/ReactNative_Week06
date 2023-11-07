import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";

const Screen_02 = ({ navigation }) => {
  var [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://6543683301b5e279de204e68.mockapi.io/w07_cafes")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "yellow",
                marginBottom: 20,
                borderRadius: 8,
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: item.Image }}
                style={{ width: 350, height: 80 }}
              />
              <View style={{padding: 10}}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Image />
                    <Text>{item.status}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Image />
                    <Text>{item.deliveryTime}</Text>
                  </View>
                  <Image />
                </View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 18, color: "#171A1F" }}>shauuw</Text>
              </View>
            </View>
          );
        }}
        contentInsetAdjustmentBehavior="automatic"
      />
    </SafeAreaView>
  );
};

export default Screen_02;
