// FirstComponent.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setValue } from '../actions/actions';

const FirstComponent = ({ navigation }) => {
    const dispatch = useDispatch();

    const navigateToSecond = () => {
        dispatch(setValue('Hello from FirstComponent'));
        navigation.navigate('SecondComponent');
    };

    return (
        <View>
            <Text>First Component</Text>
            <Button title="Go to Second Component" onPress={navigateToSecond} />
        </View>
    );
};

export default FirstComponent;
