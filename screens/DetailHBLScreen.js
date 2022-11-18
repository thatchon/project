import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView} from "react-native";

const DetailHBLScreen = ({route, navigation}) => {
  
  
    const {Title} = route.params;
    const des = route.params.Des
    function renderT(){
      return des.map((obj, index) => {
          const key = index;
          return <Text style={{fontWeight: "bold"}} key={key}>{obj}</Text>
      })
  }
  return(
    // <SafeAreaView>
    //   <ScrollView>
        <View style={styles.container}>
          <View style={styles.box_header}> 
              <Text style={styles.text_header}>{Title}</Text>
            
        </View>
            {/* <View style={styles.gridItem}>
                <View style={styles.container_2}>
                    <Text style={styles.text_title_sub} numberOfLines={1}>
                        จังหวัด :
                    </Text>
                    <Text style={styles.text_title} numberOfLines={1}>
                        กรุงเทพมหานคร
                    </Text>
                </View>
            </View> */}
              
              
                <View style={styles.gridItem}>
                  <View style={styles.container_2}>
                      <Text style={styles.text_title_sub} numberOfLines={1}  >
                          วิธีการรักษาเบื้องต้น :
                      </Text>
                      
                      <View style={styles.detailDES} >
                        {renderT()} 
                      </View>
                  </View>
              </View>
            
      
      </View>
  //   </ScrollView>
  // </SafeAreaView>
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
      
      // whiteSpace: 'pre'
      
    },
    gridItem: {
      height: "auto",
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
      height: 120,
      // flexWrap: "wrap"
      
    },
    text_title_sub: {
      fontSize: 15,
      color: "#d7d7d9",
      marginLeft: 15,
      textAlign: "left",
      marginTop: 15,
      marginBottom: 15,
    },
    detailDES:{
      padding: 15,
      flexWrap: "wrap"
    }
  });

export default DetailHBLScreen;
