import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput} from "react-native";
import { doc, setDoc, Timestamp, collection, addDoc, query, where, updateDoc, documentId, getDocs, QuerySnapshot } from "firebase/firestore"; 
import { Item } from "react-navigation-header-buttons";
import { firebase } from "../data/firebaseDB"

function SecondRecordScreen({navigation}) {
    const [text, setText] = useState([]);
    const user = firebase.auth().currentUser.uid;
    const db = firebase.firestore()

    function addRecord () {
        addDoc(collection(db, "record"), {
          text: text,
          userId: user,
        }).then(() => {
            console.log('data submit');
            navigation.navigate('บันทึกสุขภาพ')
          }).catch((error) => {
              console.log(error);
          });
      }

    return(
        <View style={styles.container}>
            <TextInput
          multiline={true}
          keyboardType="default"
          style = {styles.textInput}
      />
      <Button title="เสร็จ"></Button>
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
      marginBottom: 8,
      fontSize: 40
    },
    textInput: {
        marginTop: 20,
      width: "90%",
      height: "30%",
      backgroundColor: '#ffff'
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
    }
  });

export default SecondRecordScreen;
