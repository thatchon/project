import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput} from "react-native";
import { doc, setDoc, Timestamp, collection, addDoc, query, where, updateDoc, documentId, getDocs, QuerySnapshot } from "firebase/firestore"; 
import { HeaderButton, Item } from "react-navigation-header-buttons";
import { firebase } from "../data/firebaseDB"

function SecondRecordScreen({navigation, screenProps}) {
  const [userText, setUserText] = useState(null);
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
        }
      })
    }

    const handleUpdate = async() => {
      firebase.firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        record: userText.record,
      })
      .then(() => {
        navigation.navigate("บันทึกสุขภาพ")
        // console.log('record Updated!');
      })
    }

    useEffect(() => {
      getUser();
      console.log(userText)
    }, []);

    return(
        <View style={styles.container}>
            <TextInput
            multiline
            numberOfLines={3}
            placeholder="พิมพ์ที่นี้..."
            placeholderTextColor="#666666"
            value={userText ? userText.record : ''}
            onChangeText={(txt) => setUserText({...userText, record: txt})}
            autoCorrect={true}
            style={[styles.textInput]}
          />
          <Button title="เสร็จ" onPress={handleUpdate}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7f7f7",
      alignItems: 'center'
    },
    textInput: {
      marginTop: 20,
      width: "90%",
      height: "40%",
      backgroundColor: '#ffff',
      fontSize: 18,
      padding: 10,
      textAlignVertical: 'top',
      marginBottom: 10
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
      width: "100%",
      height: "40%",
      backgroundColor: '#ffff',
      marginBottom: 10,
    },
    padding_btn: {
      margin: 10
    }
  });

export default SecondRecordScreen;
