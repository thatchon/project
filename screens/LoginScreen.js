import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import { firebase } from '../data/firebaseDB'
import { useTogglePasswordVisibility } from '../hooks/handlePasswordVisibility'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C2FFD7"
    },
      inputContainer: {
        width: '100%',
        alignItems: 'center',
      },
      inputField: {
        padding: 14,
        fontSize: 22,
        width: '90%'
      }
})

export default function LoginScreen({ navigation }) {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } 
    = useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
                
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    return <View style={styles.view}>
        <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20, color: 'white' }}>D-CARE APPLICATION</Text>
        <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
        <View style={styles.inputContainer}>
            <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={passwordVisibility} />
            {/* <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable> */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => Login()} title="เข้าสู่ระบบ" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.navigate("Sign Up")} title="สมัครสมาชิก" style={{ width: "48%", backgroundColor: "#FBB5C3" }} />
        </View>
    </View>
}