import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLogin from '../Components/Screens/HomeLogin';

export type MainStackParamList = {
    HomeLogin:undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
            name="HomeLogin"
            component={HomeLogin}
            options={{ title: 'Inicio' }} />

        </Stack.Navigator>
    )
}

export default MainNavigator

