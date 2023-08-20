// SecondComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const SecondComponent = () => {
    const value = useSelector(state => state.value);

    return (
        <View>
            <Text>Second Component</Text>
            <Text>Value from First Component: {value}</Text>
        </View>
    );
};

export default SecondComponent;
