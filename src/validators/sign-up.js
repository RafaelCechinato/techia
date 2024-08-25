import * as yup from 'yup';

const validationSignUp = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  name: yup.string().required('Name is required'),
  age: yup.number('Invalid age format').required('Age is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default validationSignUp;
