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

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text >Main Screen</Text>
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
});
