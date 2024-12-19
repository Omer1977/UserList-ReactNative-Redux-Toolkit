import * as Yup from 'yup';

const newUserSchema = Yup.object().shape({
  name: Yup.string().required('Required area'),
  surname: Yup.string().required('Required area'),
  phoneNumber: Yup.string()
    .min(10, 'Enter at least 10 characters')
    .max(20, 'Enter up to 20 characters')
    .required('Required area'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required area'),
  age: Yup.number()
    .min(18, 'You must be at least 18 years old')
    .max(80, 'You must be at most 80 years old'),
  gender: Yup.string(),
});

export {newUserSchema};
