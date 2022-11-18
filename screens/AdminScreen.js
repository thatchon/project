import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";

function AdminScreen() {
    return(
        <View style={styles.container}>
            <Text>This is AdminScreen.</Text>
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

export default AdminScreen;
