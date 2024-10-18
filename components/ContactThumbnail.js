import { StyleSheet, View } from "react-native"
import { Avatar, Text } from "react-native-paper"

const ContactThumbnail = ({ avatar, name, phone }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image source={{uri: avatar}} size={150}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>{phone}</Text>
        </View>
    )
}

export default ContactThumbnail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#41a5e8",
    },
    name: {
        fontSize: 25,
        margin: 10,
        fontWeight: "900"
    },
    phone: {
        fontSize: 20
    }
})