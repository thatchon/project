import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import TableGrid from "../../components/TableGrid";
import { firebase } from '../../data/firebaseDB'

const SelectGen1Screen = ({route, navigation}) => {
    const {prev, id} = route.params;
    const [titles, setTitles] = useState([]);

        const dataRef = firebase.firestore().collection('AllData/General_1/General_1_Data');
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
                                navigation.navigate("Detail", {prev: "ทั่วไป ไข้หวัด ผิวหนัง ฯลฯ",Title: item.title , Des: item.des})
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

export default SelectGen1Screen;
