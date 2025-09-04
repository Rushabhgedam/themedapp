import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/dashboard/HomeScreen";



const Stack = createNativeStackNavigator();


const UserNavigationScreensList = []


const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="homescreen">
            <Stack.Screen name="homescreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}


export default UserNavigation;