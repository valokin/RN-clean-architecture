import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import PostsScreen from './src/blog/views/screens/PostsScreen';
import Navigator from './src/navigation';

// Create a client
const queryClient = new QueryClient()

export const AuthContext = React.createContext<
{state: authState; dispatch: Dispatch} | undefined
>(undefined)

type authState = {
  isLoggedIn: boolean;
}
type Action = {type: 'login'} | {type: 'logout'}
type Dispatch = (action: string) => void
const initialAuthState: authState = {
  isLoggedIn: false
}

const authReducer = function(state: authState, action: string) {
  switch (action) {
    case 'login':
      return {isLoggedIn: true};
    case 'logout':
      return {isLoggedIn: false};
    default:
      throw new Error();
  }
}

function App() {
  const [state,dispatch] = React.useReducer(authReducer, initialAuthState);

  const value = {state,dispatch}
  return (
    <AuthContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;