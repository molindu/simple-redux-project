// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/store';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="FirstComponent">
                    <Stack.Screen name="FirstComponent" component={FirstComponent} />
                    <Stack.Screen name="SecondComponent" component={SecondComponent} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
