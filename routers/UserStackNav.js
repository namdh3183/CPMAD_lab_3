import { createStackNavigator } from "@react-navigation/stack";
import User from "../screens/User";
import UserOptions from "../screens/UserOptions"; 
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const UserStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3498DB" },
      }}
    >
      <Stack.Screen
        name="User"
        component={User}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitle: "Me",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("UserOptions")}
              style={styles.iconButton}
            >
              <Icon
                name="cog"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="UserOptions"
        component={UserOptions} // Add UserOptions screen to the stack navigator
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    marginRight: 10,
    padding: 5,
  },
});

export default UserStackNav;
