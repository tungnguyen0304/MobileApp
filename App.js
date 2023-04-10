import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import MeetScreen from './screens/MeetScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{title: 'Welcome'}} 
        />

        <Stack.Screen 
          name="Discover"
          component={DiscoverScreen}
          options={{title: 'Discover'}}
        />

        <Stack.Screen 
          name="Meet"
          component={MeetScreen}
          options={{title: 'Meet'}}
        />

        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />

<Stack.Screen 
          name="Main"
          component={MainScreen}
          options={{title: 'Main'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 30,
    width: 200,
    height: 100,
    textAlign: 'center',
  },
  discover: {
    fontWeight: 'bold',
    fontSize: 30,
    width: 300,
    height: 100,
    textAlign: 'center',
    marginTop: 10,
  },
  slogan1:{
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  slogan2:{
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  slogan3: {
    fontSize: 15,
    textAlign: 'center',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
  },
  dot: {
    width: 10,
    height: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 52,
    backgroundColor: '#18A0FB',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 41,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});