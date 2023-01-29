import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";
import { useEffect, useCallback } from "react";
// import Form from "react-native-form";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { Home } from "./Home";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  // const onSubmit = useCallback(async (formData) => {
  //   const { email, password } = formData;
  //   formData.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "https://pocket-saver.onrender.com/users/login",
  //       { email, password }
  //     );
  //     console.log(res.data.token);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // firebase
  //   //   .auth()
  //   //   .signInWithEmailAndPassword(email, password)
  //   //   .then((result) => {
  //   //     console.log(result);
  //   //     navigation.navigate("AccountSuccess");
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   // console.log(formData);

  const onSubmit = useCallback(async (formData) => {
    // try {
    //   const res = await axios.post(
    //     "https://pocket-saver.onrender.com/users/login",
    //     formData
    //   );
    //   console.log(res.data.token);
    //   navigation.navigate("Home.js");
    // } catch (err) {
    //   console.error("An error occurred while logging in: ", err);
    //   setError("Invalid email or password");
    // }
    const { email, password } = formData;
    navigation.navigate("Home");
    try {
      const response = await axios.post(
        "https://pocket-saver.onrender.com/users/login",
        {
          email,
          password,
        }
      );

      if (response.data.userExists) {
        console.log(formData);
        navigation.navigate("Home");
      } else {
        console.log("Invalid username or password");
      }
    } catch (error) {
      console.log("User Logged in");
    }
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  function handlePress() {
    navigation.navigate("Home");
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
          source={require("../assets/TransferMoney.png")}
          style={styles.loginBg}
        />
        <View style={styles.heroContainer}>
          <Text style={styles.heroText}>Welcome Back</Text>

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
              onChangeText={(text) => setValue("email", text)}
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
              onChangeText={(text) => setValue("password", text)}
              style={styles.placeholderText}
            />
          </ImageBackground>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
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
                onPress={handlePress}
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

export default Login;

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
    top: 20,
    left: 20,
    right: 20,
  },
  loginBg: {
    marginTop: 50,
    height: windowHeight * 0.55,
    width: windowWidth - 50,
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
