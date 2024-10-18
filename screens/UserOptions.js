import React,{useState, useEffect} from 'react';
import { StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import DetailListItem from '../components/DetailListItem';

const UserOptions = () => {
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Change Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 1,
    },
    text: {
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "700",
    }
})

export default UserOptions;