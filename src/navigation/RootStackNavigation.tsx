import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthNavigation from './AuthNavigation';
import UserNavigation from './UserNavigation';
import OnboardingScreen from '../screens/OnboardingScreen';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onboardingscreen">
                <Stack.Screen name="onboardingscreen" component={OnboardingScreen} />
                <Stack.Screen name="authstack" component={AuthNavigation} />
                <Stack.Screen name="userstack" component={UserNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default RootNavigation;