import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Avatar, Text } from "react-native-paper"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailListItem = (props) => {

    const {icon, label, value} = props
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <MaterialIcons name={icon} size={24} color="black" style={styles.image}/>
            <View style={{marginLeft: 10}}>
                <Text variant="labelLarge">{label}</Text>
                <Text>{value}</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        padding: 5,
        margin: 10,
        marginBottom:-7

    },
    image:{
        alignSelf: "center"
    }
})

export default DetailListItem