import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import TableGrid from '../components/TableGrid';
import testdata from '../data/hos_data.json'

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
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
  var dLon = this.deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}
  

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  render() {
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