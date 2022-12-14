import React, { useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { firebase } from '../data/firebaseDB'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/CustomHeaderButton"

import FavoriteScreen from "../screens/FavoriteScreen";
import RecordScreen from "../screens/RecordScreen";
import SecondRecordScreen from "../screens/SecondRecordScreen";
import HospitalScreen from "../screens/HospitalScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FirstAidScreen from "../screens/FirstAidScreen";
import SelectHeadScreen from "../screens/SelectScreen/SelectHeadScreen";
import SelectBodyScreen from "../screens/SelectScreen/SelectBodyScreen";
import SelectBottomScreen from "../screens/SelectScreen/SelectBottomScreen";
import SelectDissaseScreen from "../screens/SelectScreen/SelectDissaseScreen";
import SelectGen1Screen from "../screens/SelectScreen/SelectGen1Screen";
import DetailDissaseScreen from "../screens/DetailDissaseScreen";
import DetailHospitalScreen from "../screens/DetailHospitalScreen";
import DetailFirstAidScreen from "../screens/DetailFirstAidScreen";
import DetailHBLScreen from "../screens/DetailHBLScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Button from "../components/Btn";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator screenOptions={{ 
      headerStyle: { 
        backgroundColor: "#C2FFD7", },
      headerTintColor: "black"  }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="FirstAid" component={FirstAidScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
      <Stack.Screen name="SelectHead" component={SelectHeadScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
      <Stack.Screen name="SelectBody" component={SelectBodyScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
      <Stack.Screen name="SelectBottom" component={SelectBottomScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
        <Stack.Screen name="SelectGen1" component={SelectGen1Screen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
        <Stack.Screen name="DetailFirstAid" component={DetailFirstAidScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
        <Stack.Screen name="DetailHBL" component={DetailHBLScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
        <Stack.Screen name="Search" component={SearchScreen} options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
    </Stack.Navigator>
  );
}

function MyStackHos () {
  return(
    <Stack.Navigator  screenOptions={{ 
      headerStyle: { 
        backgroundColor: "#C2FFD7", },
      headerTintColor: "black",
      headerTitleAlign: 'center'  }}>
      <Stack.Screen name="Hospital" component={HospitalScreen} 
      options={{
        title: "???????????????????????????"
      }} />
      <Stack.Screen name="DetailHos" component={DetailHospitalScreen} 
      options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
    </Stack.Navigator>
  );
}

function MyStackDis () {
  return(
    <Stack.Navigator screenOptions={{ 
      headerStyle: { 
        backgroundColor: "#C2FFD7", },
      headerTintColor: "black",
      headerTitleAlign: 'center'  }}>
      <Stack.Screen name="Dissase" component={SelectDissaseScreen}
      options={{
        title: "?????????"
      }} />
      <Stack.Screen name="Detail" component={DetailDissaseScreen} 
      options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
    </Stack.Navigator>
  );
}

function MyStackRec () {
  return(
    <Stack.Navigator screenOptions={{ 
      headerStyle: { 
        backgroundColor: "#C2FFD7", },
      headerTintColor: "black",
      headerTitleAlign: 'center'  }}>
      <Stack.Screen name="Record" component={RecordScreen}
      options={{
        title: "????????????????????????????????????"
      }} />
      <Stack.Screen name="Second" component={SecondRecordScreen} 
      options={
        ({ route }) => ({
          title: route.params.prev,
        }) }/>
    </Stack.Navigator>
  );
}

// ??????????????? Navigator ????????????
export default function MyNavigator() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });


  return (
    <NavigationContainer>
      {isLoggedIn ? <Tab.Navigator screenOptions={{ 
      headerStyle: { 
        backgroundColor: "#C2FFD7", },
      headerTintColor: "black",
      headerTitleAlign: 'center'  }}>
          <Tab.Screen name="????????????????????????" component={MyStack}
                  options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name="home" size={32} color={color}  />;
            },
            }} />
          <Tab.Screen name="???????????????????????????" component={MyStackHos}
                  options={{
            headerShown: false,        
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="hospital-building" size={32} color={color}  />;
            },
            }} />
          <Tab.Screen name="?????????" component={MyStackDis}
                  options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="doctor" size={32} color={color}  />;
            },
            }} />
          <Tab.Screen name="????????????????????????????????????" component={MyStackRec}
                  options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="book" size={32} color={color}  />;
            },
            }} />
          <Tab.Screen name="??????????????????????????????" component={FavoriteScreen}
                  options={{
            tabBarIcon: ({ color }) => {
              return <MaterialCommunityIcons name="star" size={32} color={color}  />;
            },
            }} />
      </Tab.Navigator> :
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
      </Stack.Navigator>}
    </NavigationContainer>
  );
}

