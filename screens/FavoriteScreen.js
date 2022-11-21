import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import TableGrid from "../components/TableGrid";
import { firebase } from '../data/firebaseDB';


const FavoriteScreen = ({ route, navigation }) => {
    const [titles, setTitles] = useState([]);
    const [result, setResult] = useState([]);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const user = firebase.auth().currentUser;

    const getUser = async () => {
        await firebase.firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then((DocumentSnapshot) => {
                if (DocumentSnapshot.exists) {
                    setUserData(DocumentSnapshot.data());
                    if (loading) {
                        setLoading(false);
                    }
                }
            })
    }

    const setData = () => {
        const data = []
        for (var i = 0; i < userData.favorite.length; i++) {
            for (var j = 0; j < titles.length; j++) {
                if (titles[j].title === userData.favorite[i]) {
                    data.push(titles[j])
                }
            }
        }
        setResult(data)
    }

    const dataRef = firebase.firestore().collection('AllData/Dissase/DissaseData');
    useEffect(() => {
        getUser();
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
                    // setData();
                }
            )

    }, [])

    useEffect(() => {
        getUser();
        navigation.addListener("focus", () => setLoading(!loading));
    }, [navigation, loading]);


    return (
        <View>
            <Button color={"lightblue"} title={"Show"} onPress={setData} />
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
});

export default FavoriteScreen;
