import { createStackNavigator } from "@react-navigation/stack"
import Contacts from "../screens/Contacts"
import Profile from "../screens/Profile"
import Favorite from "../screens/Favorite"

const Stack = createStackNavigator()

const HomeStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: "#3498DB"},
            }}>
            <Stack.Screen name="Contacts" component={Contacts} options={{headerTitleAlign: "center"}}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}

export default HomeStackNav