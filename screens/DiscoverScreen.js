import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
export default DiscoverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/banner/Image02.png")}
      />
      <Text style={styles.discover}>DISCOVER ROUTE NEAR YOU</Text>
      <Text style={styles.slogan2}>
        WE WILL HELP YOU FIND A SUITABLE, FAST, SIMPLE, AND OPTIMAL ROUTE ON
        WHERE YOU LIVE
      </Text>
      <StatusBar style="auto" />

      <View style={styles.containdots}>
        <Image
          style={styles.dot}
          source={require("../assets/banner/Ellipse2.png")}
        />
        <Image
          style={styles.dot}
          source={require("../assets/banner/Ellipse1.png")}
        />
        <Image
          style={styles.dot}
          source={require("../assets/banner/Ellipse2.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Meet", { name: "Meet" })}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    width: 200,
    height: 100,
    textAlign: "center",
  },
  discover: {
    fontWeight: "bold",
    fontSize: 30,
    width: 300,
    height: 100,
    textAlign: "center",
    marginTop: 10,
  },
  slogan1: {
    fontSize: 15,
    textAlign: "center",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  slogan2: {
    fontSize: 15,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  slogan3: {
    fontSize: 15,
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
  containdots: {
    marginTop: 15,
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 52,
    backgroundColor: "#18A0FB",
    display: "flex",
    flexDirection: "row",
    borderRadius: 41,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
