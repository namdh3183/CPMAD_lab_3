import { createStackNavigator } from "@react-navigation/stack"
import Profile from "../screens/Profile"
import Favorite from "../screens/Favorite"

const Stack = createStackNavigator()

const FavoriteStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: "#3498DB"},
            }}>
            <Stack.Screen name="Favorite" component={Favorite} options={{headerTitleAlign: "center"}}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}

export default FavoriteStackNav