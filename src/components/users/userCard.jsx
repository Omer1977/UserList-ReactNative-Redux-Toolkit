import React, {Component, useMemo} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {compareName, getInitial, getRandomColor} from '../../utils/functions';
import themeColors from '../../theme/themeColors';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {USERDETAIL} from '../../utils/routes';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  const profileBackgroundColor = useMemo(() => getRandomColor(), []);

  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}
      style={styles.container}>
      <View>
        <View
          style={[styles.profile, {backgroundColor: profileBackgroundColor}]}>
          <Text style={styles.initial}>
            {getInitial(user.name, user.surname)}
          </Text>
        </View>
      </View>
      <View style={styles.compareView}>
        <Text style={styles.compareText}>
          {compareName(user.name, user.surname)}
        </Text>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
      <View style={styles.arrow}>
        <ArrowRight size={25} color={themeColors.GRAY} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.CARD,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  profile: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  compareView: {
    padding: 10,
    flex: 1,
  },
  compareText: {
    fontSize: 18,
    fontWeight: '500',
  },
  emailText: {
    fontSize: 16,
    fontWeight: '400',
  },
  arrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserCard;
