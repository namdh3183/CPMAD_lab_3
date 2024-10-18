import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import HomeStackNav from "./HomeStackNav"
import FavoriteStackNav from "./FavoriteStackNav"
import UserStackNav from "./UserStackNav"

const Tab = createMaterialBottomTabNavigator()
const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackNav}
                options={{
                    tabBarIcon: "home"
                }}/>
            <Tab.Screen name="Favorite" component={FavoriteStackNav}
                options={{
                    tabBarIcon: "star"
                }}/>
            <Tab.Screen name="User" component={UserStackNav}
                options={{
                    tabBarIcon: "account"
                }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNav