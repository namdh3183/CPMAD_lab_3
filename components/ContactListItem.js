import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { Avatar, Text, Divider } from "react-native-paper"

const ContactListItem = (props) => {
    const { avatar, name, phone, onPress } = props
    console.log(name)
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Avatar.Image source={{uri: avatar}} size={50}/>
                <View style={{marginLeft: 10}}>
                    <Text variant="labelLarge">{name}</Text>
                    <Text>{phone}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ContactListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        padding: 5,
        margin: 10,
        marginTop:-7,
    }
})