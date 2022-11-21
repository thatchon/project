import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import TableGrid from '../components/TableGrid';
import testdata from '../data/hos_data.json';
import { getDistance } from 'geolib';

export default class HospitalScreen extends React.Component {

  state = { 
    hasLocationPermission: false,
    latitude: 0,
    longitude: 0,
    hospitalList: []
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync () {
    const { status } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        hasLocationPermissions: true,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } else {
      alert('Location permission not granted');
    }
  };

  


  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  render() {
    testdata.features.forEach((obj, i) => {
      const lat1 = obj.geometry.coordinates[0]
      const lon1 = obj.geometry.coordinates[1]
      // console.log(lat1, lon1)
      const {latitude, longitude} = this.state
      const dist = getDistance(
        { latitude, longitude },
        { lat1, lon1 }
      );
      // console.log(dist)
    });


    // console.log(getDistanceFromLatLonInKm)
    const { navigation } = this.props;
    return (
      <View style={this.styles.container}>
        <FlatList  
          data={testdata.features}
          renderItem={({item}) => (
            <TableGrid 
            title={item.properties.name}
            onSelect={() => {
              navigation.navigate("DetailHos", {prev: "โรงพยาบาล", Title: item.properties.name, Tel: item.properties.tel, Num_bed: item.properties.num_bed, Address: item.properties.address})
            }}
             />
          )}
        />
      </View>
    );
  }
}