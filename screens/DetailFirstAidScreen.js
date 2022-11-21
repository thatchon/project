import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const DetailFristAidScreen = ({ route, navigation }) => {


  const { Title } = route.params;
  const des = route.params.Des
  function renderT() {
    return des.map((obj, index) => {
      const key = index;
      return <Text style={styles.text_des} key={key}>{obj}{"\n"}</Text>
    })
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box_header}>
            <Text style={styles.text_header}>{Title}</Text>

          </View>
          <View style={styles.gridItem}>
            <ScrollView style={styles.container_2}>
              <Text style={styles.text_title_sub} numberOfLines={1}  >
                การปฐมพยาบาลเบื้องต้น :
              </Text>

              <View style={styles.detailDES} >
                {renderT()}
              </View>
            </ScrollView>
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
    backgroundColor: "#314061",

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

    // whiteSpace: 'pre'

  },
  gridItem: {
    height: "100%",
    backgroundColor: "red",
    // whiteSpace: 'pre'
    // flexWrap: "wrap"

  },
  container_2: {
    flex: 1,
    backgroundColor: "#ffff",
    borderBottomColor: "#d7d7d9",
    borderBottomWidth: 1,
    marginLeft: 15,
    height: "100%",
    // flexWrap: "wrap"

  },
  text_title_sub: {
    fontSize: 18,
    color: "#d7d7d9",
    marginLeft: 15,
    textAlign: "left",
    marginTop: 15,
    marginBottom: 15,
  },
  detailDES: {
    padding: 15,
    // flexWrap: "wrap",
  },
  text_des: {
    fontSize: 24
  }
});

export default DetailFristAidScreen;