import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import { firebase } from '../data/firebaseDB'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function SignUpScreen({ navigation }) {

    const auth = firebase.auth;

    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: "",
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2, role } = values

        if (pwd == pwd2) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                    firebase.firestore().collection("users").doc(auth().currentUser.uid).set({
                        uid: auth().currentUser.uid,
                        email
                    })
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
    }

    return <View style={styles.view}>
        <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Sign Up</Text>
        <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}/>
        <TextBox placeholder="Confirme Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}/>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />
        </View>
    </View>
}