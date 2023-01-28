import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DropdownComponent from "../components/DropdownComponent";
import ChartsMonthly from "../components/Charts/ChartsMonthly";
import ChartsDaily from "../components/Charts/ChartsDaily";
const Home = () => {
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../assets/Rectangle.png")}
          style={styles.welcomeContainer}
        >
          <Text style={styles.h1}>Hello,</Text>
          <Text maxLength={4} style={styles.h2Gray}>
            Sivaramakrishnan
          </Text>
        </ImageBackground>
        <View style={styles.amountSaved}>
          <Pressable>
            <ImageBackground
              source={require("../assets/Vector.png")}
              style={styles.Button}
            >
              <Text style={styles.h2Black} onPress={() => setVisibility(true)}>
                Amount Saved
              </Text>
              {visibility ? <Text>300</Text> : null}
            </ImageBackground>
          </Pressable>
        </View>
        <View style={styles.HeroSection}>
          <Text style={styles.h2BlackBold}> AMOUNT SAVED (Categories) </Text>
          <View style={styles.dropDown}>
            <DropdownComponent sendData={setName} />
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.Row}>
              <ChartsMonthly />
              <ChartsDaily />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: 100,
    height: 150,
    width: 250,
    paddingLeft: 20,
    paddingTop: 20,
    resizeMode: "stretch",
    borderColor: "black",
    borderWidth: 2,
  },
  h1: {
    fontFamily: "Lato",
    fontSize: 28,
  },
  h2Gray: {
    fontFamily: "Lato",
    color: "gray",
    marginTop: 20,
    fontSize: 26,
  },
  amountSaved: {
    marginTop: 50,
    alignItems: "center",
  },
  dropDown: {
    margin: 40,
  },
  h2Black: {
    fontFamily: "Lato",

    fontSize: 23,
  },
  h2BlackBold: {
    fontFamily: "LatoBold",
    marginLeft: 20,
    fontSize: 23,
  },
  Button: {
    height: 100,
    width: 300,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 3,
  },
  HeroSection: {
    marginTop: 30,
  },
  graph: {
    height: 200,
    width: 200,
    gap: 10,
    resizeMode: "stretch",
  },
  Row: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
});
