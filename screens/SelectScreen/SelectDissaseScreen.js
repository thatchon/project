import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList} from "react-native";
import TableGrid from "../../components/TableGrid";
import { firebase } from '../../data/firebaseDB'

const SelectDissaseScreen = ({route, navigation}) => {
    const [titles, setTitles] = useState([]);

        const dataRef = firebase.firestore().collection('AllData/Dissase/DissaseData');
        useEffect(() => {
            dataRef
            .onSnapshot(
                QuerySnapshot => {
                    const titles = [];
                    QuerySnapshot.forEach((doc) => {
                        titles.push({
                            ...doc.data(), id:doc.id
                        });

                    })
                    setTitles(titles)
                }
            )
        }, [])

        return(
                <FlatList 
                    data={titles}
                    numColumns={1}
                    renderItem={({item}) => (
                        <TableGrid
                            title={item.title}
                            onSelect={() => {
                                navigation.navigate("Detail", {prev: "โรค", Title: item.title , Des: item.des})
                            }}
                        />
                    )}
                />
        )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default SelectDissaseScreen;
