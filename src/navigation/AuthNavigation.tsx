import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgetPasswordScreen, LoginScreen, OtpScreen, RegisterScreen, ResetPasswordScreen } from "../screens";

const Stack = createNativeStackNavigator();

const authNavigationScreensList = [
    {
        screenName: 'login',
        component: LoginScreen
    },
    {
        screenName: 'register',
        component: RegisterScreen
    },
    {
        screenName: 'forget-password',
        component: ForgetPasswordScreen
    },
    {
        screenName: 'reset-password',
        component: ResetPasswordScreen
    },
    {
        screenName: 'otp-screen',
        component: OtpScreen
    }
]


const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {authNavigationScreensList.map((screen) => <Stack.Screen component={screen.component} name={screen.screenName} />)}
        </Stack.Navigator>
    )
}


export default AuthNavigation;