import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Signup = ({ navigate }) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback((formData) => {
    const { Name, email, password } = formData;
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     navigation.navigate("AccountSuccess");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // if (formData.Name && formData.password && formData.email === null) {
    //   SetPres(true);
    // }
    console.log(formData);
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("Name");
    register("email");
    register("password");
  }, [register]);
  const [pres, SetPres] = useState(false);
  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.loginContainer}>
      <View style={styles.bgImage}>
        <ImageBackground
          source={require("../assets/Ellipse.png")}
          style={styles.bgEllipse}
        ></ImageBackground>
      </View>
      <View style={styles.loginImage}>
        <ImageBackground
          source={require("../assets/SignUpBg.png")}
          style={styles.loginBg}
        />
        <View style={styles.heroContainer}>
          <Text style={styles.heroText}>Welcome Back</Text>
          <ImageBackground
            source={require("../assets/EmailInput.png")}
            style={styles.loginInput}
          >
            <TextInput
              onPress={(e) => e.preventDefault()}
              autoCompleteType="Name"
              placeholder="Name"
              onChangeText={onChangeField("Name")}
              style={styles.placeholderText}
            />
          </ImageBackground>
          <ImageBackground
            source={require("../assets/EmailInput.png")}
            style={styles.loginInput}
          >
            <TextInput
              style={styles.placeholderText}
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Email"
              onChangeText={onChangeField("email")}
            />
          </ImageBackground>
          <ImageBackground
            source={require("../assets/EmailInput.png")}
            style={styles.loginInput}
          >
            <TextInput
              secureTextEntry
              autoCompleteType="password"
              placeholder="Password"
              onChangeText={onChangeField("password")}
              style={styles.placeholderText}
            />
          </ImageBackground>

          <TouchableOpacity disabled={pres} onPress={handleSubmit(onSubmit)}>
            <ImageBackground
              source={require("../assets/Vector.png")}
              style={styles.submitButton}
            >
              <Text style={styles.placeholderText}>Submit</Text>
            </ImageBackground>
          </TouchableOpacity>

          <Text>
            {" "}
            If you are new to PocketSaver,{" "}
            <Pressable>
              <Text
                style={{ fontFamily: "Lato", color: "#3944BC", paddingTop: 10 }}
              >
                Signup
              </Text>
            </Pressable>{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },
  bgEllipse: {
    height: 500,
    width: 300,
    opacity: 0.4,
    resizeMode: "stretch",
  },
  loginImage: {
    position: "absolute",

    left: 20,
    right: 20,
  },
  loginBg: {
    marginTop: 30,
    height: windowHeight * 0.45,
    width: windowWidth - 100,
    resizeMode: "contain",
  },
  heroText: {
    fontFamily: "Lato",
    fontSize: 40,
  },
  heroContainer: {
    paddingTop: 10,
  },
  loginInput: {
    height: 45,
    width: windowWidth - 55,
    marginTop: 30,
    resizeMode: "stretch",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  placeholderText: {
    fontFamily: "Lato",
    fontSize: 20,
  },
  submitButton: {
    marginTop: 20,
    height: 45,
    width: windowWidth - 55,
    fontFamily: "Lato",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
