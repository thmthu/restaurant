import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import WaitScreen from './screens/WaitScreen';
import SearchScreen from './screens/SearchScreen';
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="LogIn" component={LoginScreen} />

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
                <Stack.Screen name="WaitScreen" options={{ presentation: 'modal' }} component={WaitScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}