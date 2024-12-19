import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  users: [],
  title: 'Merhaba',
};

const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
      Alert.alert('Successful', 'User added successfully');
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter(user => user.id !== userId);
      Alert.alert('Deleted', 'User deleted successfully');
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      state.users = state.users.map(user =>
        user.id === updatedUser.id ? updatedUser : user,
      );
      Alert.alert('Updated', 'User updated successfully');
    },
  },
});

export const {addNewUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
