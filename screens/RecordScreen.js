import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

function RecordScreen({navigation}) {
    return(
      <View style = {styles.container}>
      <Text style = {styles.textTitle} > สมุดบันทึกสุขภาพ</Text>
      <View style={styles.box_text}>
        <Text>Test</Text>
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
    marginBottom: 8,
    fontSize: 40
  },
  textInput: {
    width: "80%",
    height: "40%",
    backgroundColor: "blue"
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
    backgroundColor: '#5897fc',
    marginBottom: 10,
  }
});

export default RecordScreen;
