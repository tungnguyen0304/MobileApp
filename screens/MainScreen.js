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
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function MainScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [mssv, setMssv] = useState(0);
  const regex = /^1[5-9] || ^2[0-2]/;
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setMssv(data);
    if (regex.test(mssv.toString))
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned || <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />}
      {scanned && <Text style={styles.discover}>Kết quả nhận được là: {mssv}</Text>}
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  discover: {
    fontWeight: "bold",
    fontSize: 30,
    width: 300,
    height: 100,
    textAlign: "center",
    marginTop: 10,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center", // can giua theo truc y
    alignItems: "center", // can giua theo truc x
    padding: 20,
    backgroundColor: "white",
  },
});

