import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { firebase } from "../data/firebaseDB"

function RecordScreen({navigation}) {
  const [userText, setUserText] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = firebase.auth().currentUser;

  const getUser = async() => {
    await firebase.firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserText(documentSnapshot.data());
        if (loading) {
          setLoading(false);
        }
      }
    })
  }

  // const handleUpdate = async() => {
  //   firebase.firestore()
  //   .collection('users')
  //   .doc(user.uid)
  //   .update({
  //     record: userText.record,
  //   })
  //   .then(() => {
  //     console.log('record Updated!');
  //     navigation.navigate('Second', {prev: "บันทึกรายละเอียดเพิ่มเติม"})
  //   })
  // }

  useEffect(() => {
    getUser();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

    return(
      <View style = {styles.container}>
      <Text style = {styles.textTitle} > วันนี้คุณมีอาการ?</Text>
      <View style={styles.box_text}>
        <Text style={styles.textInput}>{userText ? userText.record || 'No details added.' : ''}</Text>
      </View>
      <Button
            title="บันทึกรายละเอียดเพิ่มเติม"
            style = {styles.saveBtn}
            onPress={() => navigation.navigate('Second', {prev: "บันทึกรายละเอียดเพิ่มเติม"})}
        />
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
  },
  textTitle: {
    margin: 20,
    fontSize: 32
  },
  textInput: {
    fontSize: 20,
    color: 'white',
    padding: 10
  },
  saveBtn: {
    backgroundColor: 'black',
    width: "80%",
  },
  ScrollView: {
    margintop: 10,
    fontSize: 30
  },
  box_text: {
    width: "90%",
    height: "40%",
    backgroundColor: '#5897fc',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'white'
  }
});

export default RecordScreen;
