import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Alert } from "react-native";
import { firebase } from "../data/firebaseDB"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const DetailDissaseScreen = ({ route, navigation }) => {

  const { Title, Des } = route.params;
  const user = firebase.auth().currentUser;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [selected, setSelected]= useState(false);
  // const [icon, setIcon]= useState('star-outline');


  const getUser = async() => {
    await firebase.firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((DocumentSnapshot) => {
      if (DocumentSnapshot.exists) {
        setUserData(DocumentSnapshot.data());
        if (loading) {
          setLoading(false);
        }
      }
    })
  }

  useEffect(() => {
    getUser();
    // setIcon("star");
  })
  
  function remove(arr, name){
    var index = arr.indexOf(name)
    if (index !== -1){
      arr.splice(index, 1)
    }
  }

  function addFav() {
    const favorites = userData.favorite;
    if(!favorites.includes(Title)){
      favorites.push(Title)
      Alert.alert(
        '',
        'เพิ่มรายการโปรดสำเร็จ!',
        [
          {text: 'OK', onPress: () => console.log('add fav')},
        ],
      )
      setSelected(true)
    } else {
      remove(favorites, Title)
      Alert.alert(
        '',
        'ลบรายการโปรดสำเร็จ!',
        [
          {text: 'OK', onPress: () => console.log('add fav')},
        ],
      )
      setSelected(false)
    }

    firebase.firestore()
    .collection('users')
    .doc(user.uid)
    .set(
      {favorite: favorites},
      {merge: true}
    )
  }


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box_header}>
            <Button color={"gray"} style={styles.btn} title="Favorite" onPress={addFav}/>
            <Text style={styles.text_header}>{Title}</Text>
            {/* <MaterialCommunityIcons
              name={selected?'star-outline':'star'}
              size={24}
              color="yellow"
              onPress={addFav}
            /> */}
          </View>


          <View style={styles.gridItem}>
            <ScrollView style={styles.container_2}>
              <Text style={styles.text_title_sub} numberOfLines={1} >
                อาการของโรค :
              </Text>

              <Text style={styles.detailDES}  >
                {Des}
              </Text>
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
    flexDirection: 'row'
  },
  text_header: {
    fontSize: 28,
    color: 'white',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'stretch'
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
    fontSize: 24,
    padding: 10
    // flexWrap: "wrap",
  },
  text_des: {
    fontSize: 24
  },
  icon_test:{
    marginTop: 15,
    marginLeft: 10
  }
});

export default DetailDissaseScreen;