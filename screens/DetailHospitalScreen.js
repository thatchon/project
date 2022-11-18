import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";

function DetailHospitalScreen({route, navigation}) {
    const {prev, Title, Tel, Num_bed, Address} = route.params;
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
  });

export default DetailHospitalScreen;
