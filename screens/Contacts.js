import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { fetchContacts } from "../utils/api";
import ContactListItem from "../components/ContactListItem";

export default function Contacts({navigation}) {

    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // Fetch users's data
    useEffect(() => {
        fetchContacts()
        .then((data) => {
            setContacts(data)
            setLoading(false)
            setError(false)
        })
        .catch((e) => {
            console.log(e)
            setLoading(false)
            setError(true)
        })
    },[])
    
    const renderItem = ({item}) => {
        const { avatar, name, phone } = item
        return (
            <ContactListItem
                avatar = {avatar}
                name = {name}
                phone = {phone}
                onPress = {() => navigation.push("Profile", {contact: item})}
                />
        )
    }

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator color="green" size={30}/>}
            {error && <Text variant="bodyMedium">No Internet</Text>}
            {!loading && !error && 
                <FlatList
                    data={contacts}
                    keyExtractor={item => item.id} 
                    renderItem={renderItem} 
                    style={{padding: 10}}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})