import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {compareName, getInitial, getRandomColor} from '../../utils/functions';
import themeColors from '../../theme/themeColors';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/ui/button';
import {useDispatch} from 'react-redux';
import {deleteUser, updateUser} from '../../store/slice/userSlice';
import {newUserSchema} from '../../utils/validationSchemas';
import {Formik} from 'formik';

const UserDetail = ({route}) => {
  const profileBackgroundColor = useMemo(() => getRandomColor(), []);
  const dispatch = useDispatch();
  const {user} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  const handleUpdateUser = values => {
    const updatedUser = {
      ...user,
      ...values,
    };

    dispatch(updateUser(updatedUser));
    setModalVisible(false);
  };

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View style={styles.extra}>
          <View
            style={[styles.profile, {backgroundColor: profileBackgroundColor}]}>
            <Text style={styles.initial}>
              {getInitial(user.name, user.surname)}
            </Text>
          </View>
          <Text style={styles.compare}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>
        <View>
          <View style={styles.sms}>
            <Sms />
            <Text style={styles.email}>{user.email}</Text>
          </View>
          <View style={styles.sms}>
            <Call />
            <Text style={styles.email}>{user.phoneNumber}</Text>
          </View>
          <View style={styles.sms}>
            <Calendar />
            <Text style={styles.email}>{user.age}</Text>
          </View>
          <View style={styles.sms}>
            {user.gender == 'Male' ? <Man /> : <Woman />}
            <Text style={styles.email}>{user.gender}</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Update User"
            status="success"
            onPress={() => setModalVisible(true)}
          />
          <Button title="Delete" status="warning" onPress={handleDelete} />
        </View>
      </ScrollView>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update User</Text>
            <Formik
              initialValues={{
                name: user.name,
                surname: user.surname,
                email: user.email,
                phoneNumber: user.phoneNumber,
                age: user.age,
                gender: user.gender,
              }}
              validationSchema={newUserSchema}
              onSubmit={handleUpdateUser}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  {touched.name && errors.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    value={values.surname}
                    onChangeText={handleChange('surname')}
                    onBlur={handleBlur('surname')}
                  />
                  {touched.surname && errors.surname && (
                    <Text style={styles.errorText}>{errors.surname}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    keyboardType="phone-pad"
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={values.age}
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                  />
                  {touched.age && errors.age && (
                    <Text style={styles.errorText}>{errors.age}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Gender"
                    value={values.gender}
                    onChangeText={handleChange('gender')}
                    onBlur={handleBlur('gender')}
                  />
                  {touched.gender && errors.gender && (
                    <Text style={styles.errorText}>{errors.gender}</Text>
                  )}
                  <View style={styles.modalButtons}>
                    <TouchableOpacity
                      style={styles.buttonSave}
                      onPress={handleSubmit}>
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.buttonCancel}
                      onPress={() => setModalVisible(false)}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  extra: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    borderBottomWidth: 0.5,
    borderColor: themeColors.GRAY,
  },
  compare: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  sms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  email: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
  },
  buttons: {
    marginTop: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ECEBDE',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: themeColors.INPUT,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSave: {
    backgroundColor: themeColors.SUCCESS,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: themeColors.YELLOW,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  errorText: {
    color: themeColors.RED,
    marginTop: -10,
    marginBottom: 10,
  },
});

export default UserDetail;
