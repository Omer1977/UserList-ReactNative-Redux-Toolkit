//import liraries
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import themeColors from '../../theme/themeColors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={40} color={themeColors.WHITE} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.F_A_BUTTON,
    width: 70,
    height: 70,
    borderRadius: 28,
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
});

//make this component available to the app
export default FloatActionButton;
