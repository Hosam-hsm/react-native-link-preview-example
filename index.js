import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();

function LinkPreviewNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LinkPreviewHome" component={Home} />
        </Stack.Navigator>
    );
}

export default LinkPreviewNavigator;