import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();


const UserNavigationScreensList = []


const UserNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="user-home" component={() => null} />
        </Stack.Navigator>
    )
}


export default UserNavigation;