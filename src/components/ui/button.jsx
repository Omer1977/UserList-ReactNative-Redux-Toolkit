//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themeColors from '../../theme/themeColors';

// create a component
const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return themeColors.SUCCESS;
      case 'warning':
        return themeColors.WARNING;
      default:
        return themeColors.BUTTON;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    paddingVertical: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: themeColors.WHITE,
  },
});

//make this component available to the app
export default Button;
