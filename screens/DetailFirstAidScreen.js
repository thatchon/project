import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";

function DetailFirstAidScreen({route, navigation}) {
    const {Title, Des} = route.params;
    return(
        <View style={styles.container}>
            <Text>{Des}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default DetailFirstAidScreen;
