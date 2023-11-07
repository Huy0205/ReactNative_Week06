import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./screens/Screen_01.js";
import Screen02 from "./screens/Screen_02.js";
import { Text, Image, Pressable } from "react-native";
// import Screen03 from './screens/Screen_03.js';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen02">
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{
            headerLeft: () => (
              <Pressable
                onPress={() => {
                    navigation.navigate("Screen01");
                  }
                }
              >
                <Image
                  source={require("./assets/Button 70.png")}
                  style={{ width: 50, height: 50, marginLeft: 10 }}
                />
              </Pressable>
            ),
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily: "Inter",
                }}
              >
                Shops Near Me
              </Text>
            ),
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Screen03");
                }}
              >
                <Image
                  source={require("./assets/Image 177.png")}
                  style={{ width: 25, height: 25, marginRight: 45 }}
                />
              </Pressable>
            ),
            // headerSearchBarOptions: {
            //   shouldShowHintSearchIcon: true,
            //   placeholder: "Search",
            // },
            headerStyle: {
              backgroundColor: "#F3F4F6",
              borderBottomWidth: 0,
            },
          }}
        />
        {/* <Stack.Screen name="Screen03" component={Screen03} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
