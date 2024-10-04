import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Intro from './Intro';
import Main from './Main';
import Login from './Login';
import Register from './Register';



function TaxiApp() : JSX.Element {
    console.log('--TaxiApp()');

    const Stack = createStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={Intro}
                options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login}
                options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={Register}
                options={{headerShown:false, title:'회원가입'}}/>
                <Stack.Screen name="Main" component={Main}
                options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default TaxiApp;

