import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";
import { Colors } from "../../constants/Colors";

const TabIcon = ({ icon, color}) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        marginTop: "15%",
        gap: 3,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 5,
        borderTopColor: Colors.YELLOW,
        height: "10%",
      },
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} color={focused ? Colors.RED: Colors.YELLOW}/>,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.search} color={focused ? Colors.RED: Colors.YELLOW}/>,
        }}
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.profile} color={focused ? Colors.RED: Colors.YELLOW}/>,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
