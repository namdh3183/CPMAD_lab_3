import { useEffect, useState } from "react"
import { View } from "react-native"
import { BottomNavigation, PaperProvider, Text } from "react-native-paper"
import { fetchContacts } from "./utils/api"
import Contacts from "./screens/Contacts"
import Profile from "./screens/Profile"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNav from "./routers/BottomTabNav"


const App = () => {

  // const [contacts, setContacts] = useState([])
  // useEffect(() => {
  //   setContacts(fetchContacts())
  //   console.log(contacts)
  // }, [setContacts])

  return (
    <NavigationContainer>
      <PaperProvider>
        <BottomTabNav/>
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App