import React from "react";
import { View, Text, Button, StyleSheet, Linking, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons'; 

function DetailHospitalScreen({route, navigation}) {
    const {prev, Title, Tel, Num_bed, Address} = route.params;
    const new_title = route.params.Title

    return(
        <View style={styles.container}>
            <View style={styles.box_header}> 
                <Text style={styles.text_header}>{Title}</Text>
                <Text style={styles.text_subheader}>โทร. {Tel}</Text>
            </View>
                <View style={styles.gridItem}>
                    <View style={styles.container_2}>
                        <Text style={styles.text_title_sub} numberOfLines={1}>
                            จังหวัด :
                        </Text>
                        <Text style={styles.text_title} numberOfLines={1}>
                            กรุงเทพมหานคร
                        </Text>
                    </View>
                </View>
                <View style={styles.gridItem}>
                    <View style={styles.container_2}>
                        <Text style={styles.text_title_sub} numberOfLines={1}>
                            จำนวนเตียง :
                        </Text>
                        <Text style={styles.text_title} numberOfLines={1}>
                            {Num_bed}
                        </Text>
                    </View>
                </View>
                <View style={styles.gridItem}>
                    <View style={styles.container_2}>
                        <Text style={styles.text_title_sub} numberOfLines={1}>
                            ที่อยู่ :
                        </Text>
                        <Text style={styles.text_title} numberOfLines={1}>
                            {Address}
                        </Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <TouchableOpacity onPress={ ()=>{ Linking.openURL("https://www.google.co.th/maps/search/" + new_title, '_blank').catch((err) => console.error('An error occurred', err));}} >
                        <View style={styles.box_general}>
                            <Feather style={styles.icon_heart} name="map-pin" size={32} color="white" />
                            <Text style={styles.text_general}>แผนที่</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
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
        marginTop: 10,
        marginRight: 20
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
        marginTop: 10
      },
      gridItem: {
        height: 80,
        backgroundColor: "white",
      },
      container_2: {
        flex: 1,
        backgroundColor: "#ffff",
        borderBottomColor: "#d7d7d9",
        borderBottomWidth: 1,
        marginLeft: 15,
      },
      text_title_sub: {
        fontSize: 15,
        color: "#d7d7d9",
        marginLeft: 15,
        textAlign: "left",
        marginTop: 15
      },
      icon_heart: {
        alignSelf: 'center',
        margin: 5
    },
    space: {
        width: "100%",
        height: "100%",
    },
    box_general: {
        width: "40%",
        height: 50,
        backgroundColor: "#0390fc",
        alignSelf: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        borderRadius: 5,
        margin: 20
    },
    text_general: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        alignSelf: 'center',
    },
  });

export default DetailHospitalScreen;
