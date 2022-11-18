import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from "react-native";
import { firebase } from '../data/firebaseDB'
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

function HomeScreen({navigation}) {

    const auth = firebase.auth;

    const [user, setUser] = useState(null) // This user
    const [users, setUsers] = useState([]) // Other Users
    const [show, setShow] = useState(false)

    useEffect(() => {
        firebase.firestore().collection("users").doc(auth().currentUser.uid).get()
            .then(user => {
                setUser(user.data())
            })
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.box_header}>
                <Text style={styles.text_header}>D CARE</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Search", {prev: "ค้นหา"})
                }}>
                    <View style={styles.box_searchbar}>
                        <Text style={styles.text_searchbar}>ปวดหัว ท้องเสีย เป็นหวัด</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.box_subHeader}>
                <Text style={styles.text_subHeader}>คุณไม่สบายตรงไหน..??</Text>
            </View>
            <TouchableOpacity onPress={() => {
                    navigation.navigate("SelectHead", {prev: "ศีรษะ หู คอ จมูก ปาก", id: 1})
                }}>
                <View style={styles.box_detail_head}>
                    <FontAwesome5 style={styles.icon_heart} name="head-side-mask" size={32} color="black" />
                    <Text style={styles.text_detail_header}>ศีรษะ</Text>
                    <Text style={styles.text_detail_subheader}>หู คอ จมูก ปาก</Text>
                </View>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => {
                    navigation.navigate("SelectBody", {prev: "ลำตัว ท้อง แขน มือ อวัยวะภายใน", id: 2})
                }}>
                <View style={styles.box_detail_body}>
                    <Ionicons style={styles.icon_heart} name="body" size={32} color="black" />
                    <Text style={styles.text_detail_header}>ลำตัว</Text>
                    <Text style={styles.text_detail_subheader}>ท้อง แขน มือ อวัยวะภายใน</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                    navigation.navigate("SelectBottom", {prev: "ลำตัวส่วนล่าง อวัยวะเพศ ขา เท้า", id: 3})
                }}>
                <View style={styles.box_detail_bottom}>
                    <FontAwesome5 style={styles.icon_heart} name="shoe-prints" size={24} color="black" />
                    <Text style={styles.text_detail_header}>ลำตัวส่วนล่าง</Text>
                    <Text style={styles.text_detail_subheader}>อวัยวะเพศ ขา เท้า</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                    navigation.navigate("SelectGen1", {prev: "ทั่วไป ไข้หวัด ผิวหนัง ฯลฯ", id: 4})
                }}>
                <View style={styles.box_general}>
                <FontAwesome style={styles.icon_heart} name="heartbeat" size={32} color="black" />
                    <Text style={styles.text_general}>ทั่วไป ไข้หวัด ผิวหนัง ฯลฯ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                    navigation.navigate("FirstAid", {prev: "ปฐมพยาบาล"})
                }}>
                <View style={styles.box_general}>
                    <FontAwesome style={styles.icon_heart} name="medkit" size={32} color="black" />
                    <Text style={styles.text_general}>วิธีปฐมพยาบาลเบื้องต้น</Text>
                </View>
            </TouchableOpacity>
            <Button title="Log Out" onPress={() => firebase.auth().signOut()} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FBB5C3"
    },
    box_header: {
        width: "100%",
        height: 130,
        backgroundColor: "#C2FFD7",
        justifyContent: "center",
    },
    text_header: {
        width: 411,
        height: 41,
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        fontWeight: "800",
        marginBottom: 5,
        marginTop: 20
    },
    box_searchbar: {
        backgroundColor: "#ffff",
        width: "90%",
        height: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 3,
        alignSelf: 'center',
        justifyContent: "center"
    },
    text_searchbar: {
        textAlign: "center",
        color: "#DFDFDF",
        fontSize: 17,
        fontWeight: "400"
    },
    image_searchbar: {
        alignItems: "center"
    },
    box_subHeader: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        backgroundColor: "#FBB5C3"
    },
    text_subHeader: {
        textAlign: "center",
        color: "#ffff",
        fontSize: 20,
        fontWeight: "400",
    },
    box_detail_head: {
        width: "80%",
        height: 100,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#CFFFFC",
        margin: 10,
    },
    box_detail_body: {
        width: "80%",
        height: 100,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#CFFFFC",
        margin: 10
    },
    box_detail_bottom: {
        width: "80%",
        height: 100,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#CFFFFC",
        margin: 10
    },
    text_detail_header: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "600"
    },
    text_detail_subheader: {
        textAlign: "center",
        color: "black",
        fontSize: 17,
        fontWeight: "400"
    },
    box_general: {
        width: "90%",
        height: 50,
        backgroundColor: "#feee",
        margin: 10,
        alignSelf: 'center',
        justifyContent: "center",
        flexDirection: 'row'
    },
    text_general: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        alignSelf: 'center',
    },
    icon_heart: {
        alignSelf: 'center',
        margin: 5
    },
  });

export default HomeScreen;
