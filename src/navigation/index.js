import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import PostsScreen from '../blog/views/screens/PostsScreen';
import { AuthContext } from '../../App';

// Create a client
const queryClient = new QueryClient()


function LoginScreen() {
    const { state, dispatch } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Login"
                color="#841584"
                title={'login'} onPress={() => dispatch('login')} style={{ width: '50%' }}></Button>
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Navigator() {
    const { state, dispatch } = React.useContext(AuthContext);
    const { isLoggedIn } = state;
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                {isLoggedIn ? (
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Posts" component={PostsScreen} />
                    </Tab.Navigator>
                ) : (
                        <Tab.Navigator>
                            <Tab.Screen name="Login" component={LoginScreen} />
                        </Tab.Navigator>
                    )}
            </NavigationContainer>
        </QueryClientProvider>
    );
}

export default Navigator;