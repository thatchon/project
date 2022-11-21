import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList} from "react-native";
import TableGrid from "../../components/TableGrid";
import { firebase } from '../../data/firebaseDB'

const SelectBodyScreen = ({route, navigation}) => {
    const {prev, id} = route.params;
    const [titles, setTitles] = useState([]);

        const dataRef = firebase.firestore().collection('AllData/Body/BodyData');
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
                                navigation.navigate("DetailHBL", {prev: "ลำตัว ท้อง แขน มือ อวัยวะภายใน",Title: item.title , Des: item.des})
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

export default SelectBodyScreen;
