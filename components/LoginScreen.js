import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const progress = useRef(new Animated.Value(0)).current;
  const loginHandOn = () => {
    if (username === "1" && password === "1") {
      Alert.alert("Success", "You can access now");
    } else {
      Alert.alert("Invalid credentials", "Tên đăng nhập: 1; Mật khẩu: 1");
    }
  };
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        progress={progress}
        style={styles.logo}
        source={require("../assets/lf20_gri1GI.json")}
      />
      <Text style={styles.textlogin}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="User name"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.form1}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.remember}>
        <Text>Remember login information</Text>
      </View>
      <View style={styles.form2}>
        <TouchableOpacity style={styles.button} onPress={loginHandOn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center", // can giua theo truc y
    alignItems: "center", // can giua theo truc x
    padding: 20,
    backgroundColor: "white",
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  remember: {
    width: "100%",
    maxWidth: 300,
    top: 30,
    alignItems: "center",
    borderRadius: 20,
  },
  form: {
    width: "100%",
    maxWidth: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form1: {
    top: 20,
    width: "100%",
    maxWidth: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form2: {
    top: 70,
    width: "70%",
    borderRadius: 20,
  },

  input: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 25,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#F8D247",
    borderRadius: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  textlogin: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    bottom: 30,
  },
  helpcontact: {
    marginLeft: 20,
  },
});
