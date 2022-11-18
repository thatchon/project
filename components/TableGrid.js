import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const TableGrid = (props) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.onSelect();
      }}>
      <View
        style={{ ...styles.container}} >
        {/* <Text>{itemData.item.title}</Text> */}
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    height: 70,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    borderBottomColor: "#d7d7d9",
    borderBottomWidth: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 15,
    marginTop: 25,
    marginLeft: 15,
    textAlign: "left",
  },
});

export default TableGrid;
