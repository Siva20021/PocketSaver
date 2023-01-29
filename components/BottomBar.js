import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Billing from "../screens/Billing";
import Home from "../screens/Home";
import UserProfile from "../screens/UserProfile";
import { useNavigation } from "@react-navigation/native";

const BottomBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.navigate("Home");
          setActiveIndex(0);
        }}
      >
        <Image
          style={[styles.icon, activeIndex === 0 ? styles.activeIcon : null]}
          source={require("../assets/icon1.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.navigate("UserProfile");
          setActiveIndex(1);
        }}
      >
        <Image
          style={[styles.icon, activeIndex === 1 ? styles.activeIcon : null]}
          source={require("../assets/icon2.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.navigate("Billing");
          setActiveIndex(2);
        }}
      >
        <Image
          style={[styles.icon, activeIndex === 2 ? styles.activeIcon : null]}
          source={require("../assets/icon3.png")}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.navigate("Record");
          setActiveIndex(3);
        }}
      >
        <Image
          style={[styles.icon, activeIndex === 2 ? styles.activeIcon : null]}
          source={require("../assets/icon3.png")}
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#999",
  },
  activeIcon: {
    tintColor: "#000",
  },
});

export default BottomBar;
