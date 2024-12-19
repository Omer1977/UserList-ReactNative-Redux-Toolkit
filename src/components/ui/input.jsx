//import liraries
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import themeColors from '../../theme/themeColors';

// create a component
const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && <Text style={styles.required}>{error}</Text>}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: themeColors.BLACK,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    backgroundColor: themeColors.INPUT,
    fontSize: 16,
    borderRadius: 8,
    paddingVertical: 15,
  },
  required: {
    marginTop: 5,
    color: themeColors.RED,
  },
});

//make this component available to the app
export default Input;
