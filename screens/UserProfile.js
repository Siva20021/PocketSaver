import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import React from "react";

const UserProfile = () => {
  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <ImageBackground
        source={require("../assets/profile.png")}
        style={styles.profile}
      ></ImageBackground>
      <View style={styles.profileView}>
        <ImageBackground
          source={require("../assets/profileAvatar.png")}
          style={styles.profileAvatar}
        ></ImageBackground>
      </View>
      <Text style={styles.h1}>UserProfile</Text>
      <View style={styles.profileDetails}>
        <View style={styles.Field}>
          <Text style={styles.h2Black}>FirstName</Text>
          <Text style={styles.h2Gray}>Sivaramakrishnan</Text>
        </View>
        <View style={styles.Field}>
          <Text style={styles.h2Black}>SecondName</Text>
          <Text style={styles.h2Gray}>M</Text>
        </View>
        <View style={styles.Field}>
          <Text style={styles.h2Black}>Email</Text>
          <Text numberOfLines={1} style={styles.h2Gray}>
            sivaramakrishnan365@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  profile: {
    height: windowHeight * 0.35,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profileAvatar: {
    height: 200,
    width: 200,
  },
  profileDetails: { marginTop: 30 },
  profileView: {
    position: "absolute",
    marginTop: 120,
    marginLeft: 70,
    alignItems: "center",
  },
  h1: { marginLeft: 30, marginTop: 70, fontFamily: "LatoBold", fontSize: 28 },
  h2Black: {
    fontFamily: "Lato",
    fontSize: 23,
    margin: 20,
  },
  h2Gray: {
    fontFamily: "Lato",
    color: "gray",
    fontSize: 23,
    margin: 20,
    width: 200,
  },
  Field: {
    flexDirection: "row",
  },
});
