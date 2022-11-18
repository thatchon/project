import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import TableGrid from "../components/TableGrid";
import { firebase } from '../data/firebaseDB';


const SearchScreen = ({ route, navigation }) => {
    const [titles, setTitles] = useState([]);
    const [result, setResult] = useState([]);

    const dataRef = firebase.firestore().collection('AllData/Dissase/DissaseData');
    useEffect(() => {
        dataRef
            .onSnapshot(
                QuerySnapshot => {
                    const titles = [];
                    QuerySnapshot.forEach((doc) => {
                        titles.push({
                            ...doc.data(), id: doc.id
                        });

                    })
                    setTitles(titles)
                    setResult(titles)
                }
            )
    }, [])

    const handleSearch = text => {
        const data = []
        if(text.length > 0){
            for (var i = 0; i < titles.length; i++){
                if (titles[i].title.includes(text)){
                    data.push(titles[i])
                }
            }
            setResult(data)
        } else {
            setResult(titles)
        }
    }

    return (
        <View>
            <TextInput style={styles.searchBar} placeholder="ค้นหา" onChangeText={handleSearch} />
            <FlatList
                data={result}
                numColumns={1}
                renderItem={({ item }) => (
                    <TableGrid
                        title={item.title}
                        onSelect={() => {
                            navigation.navigate("Detail", { prev: "โรค", Title: item.title, Des: item.des })
                        }}
                    />
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    searchBar: {
        margin: 12,
        padding: 12,
        backgroundColor: "#ffff",
        width: "90%",
        height: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 3,
        alignSelf: 'center',
        justifyContent: "center"
    }
});

export default SearchScreen;
