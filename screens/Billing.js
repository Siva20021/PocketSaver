import {
  Dimensions,
  ImageBackground,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import DropdownComponent from "../components/DropdownComponent";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import TableComponent from "../components/TableComponent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").width;
const Billing = () => {
  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <View style={{ marginTop: 50 }}>
        <DropdownComponent />
      </View>
      <View style={styles.Bill}>
        <ImageBackground
          source={require("../assets/Bill.png")}
          style={styles.BillingContainer}
        >
          <View style={styles.heading}>
            <Text style={styles.h2BlackBold}>Bill</Text>

            <TableComponent />
          </View>
        </ImageBackground>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

export default Billing;

const styles = StyleSheet.create({
  Bill: {
    alignItems: "center",
    justifyContent: "center",
  },
  BillingContainer: {
    height: 450,
    marginTop: 50,
    width: windowWidth - 40,
    resizeMode: "stretch",
  },
  heading: {
    alignItems: "center",
    paddingTop: 30,
  },
  h2BlackBold: {
    fontFamily: "LatoBold",
    fontSize: 32,
  },
});
