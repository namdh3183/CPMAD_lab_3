import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native"
import { Appbar, Text } from "react-native-paper"
import { fetchContacts } from "../utils/api"
import ContactThumbnailFavorite from "../components/ContactThumbnailFavorite"

const keyExtractor = ({phone}) => phone

const Favourite = ({navigation}) => {

    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchContacts()
        .then(
            contacts => {
                setContacts(contacts)
                setLoading(false)
                setError(false)
            }
        )
        .catch(error => {
            setError(true)
            setLoading(false)
        })
    }, [])

    const renderFavoriteThumbnail = ({item}) => {
        const {avatar} = item
        return (
            <ContactThumbnailFavorite
                avatar={avatar}
                onPress={() => navigation.navigate("Profile", { contact: item })} />
        )
    }

    const favorites = contacts.filter(contact => contact.favorite)

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size={"large"} />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    renderItem={renderFavoriteThumbnail} />
            )}
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

    list: {
        alignItems: "center",
    },

    thumbnail: {
        margin: 5
    },

})