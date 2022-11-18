import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView} from "react-native";

const DetailDissaseScreen = ({route, navigation}) => {
  
  const {Title, Des} = route.params;
  
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box_header}> 
            <Text style={styles.text_header}>{Title}</Text>
          </View>
          <View style={styles.gridItem}>
            <View style={styles.container_2}>
                <Text style={styles.text_title_sub} numberOfLines={1} >
                    อาการของโรค :
                </Text>
                <Text  style={styles.text_title}  >
                    {Des} 
                </Text>
            </View>
          </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box_header: {
      width: "100%",
      height: 120,
      backgroundColor: "black",

  },
  text_header: {
      fontSize: 28,
      color: 'white',
      textAlign: 'left',
      marginLeft: 20,
      marginTop: 10
  },
  text_subheader: {
      fontSize: 14,
      color: 'white',
      textAlign: 'left',
      marginLeft: 20,
  },
  text_title: {
      fontSize: 15,
      marginLeft: 15,
      textAlign: "left",
      marginTop: 10,
      
    },
    gridItem: {
      height: "auto",
      backgroundColor: "red",
      
    },
    container_2: {
      flex: 1,
      backgroundColor: "#ffff",
      borderBottomColor: "#d7d7d9",
      borderBottomWidth: 1,
      marginLeft: 15,
      height: 120,
      
    },
    text_title_sub: {
      fontSize: 15,
      color: "#d7d7d9",
      marginLeft: 15,
      textAlign: "left",
      marginTop: 15
    },
  });

export default DetailDissaseScreen;
