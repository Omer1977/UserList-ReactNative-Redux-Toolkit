import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {ADDNEWUSER, USERDETAIL, USERS} from '../utils/routes';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#91AC8F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
