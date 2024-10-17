import * as Yup from 'yup';

export const loginYupSchema = Yup.object().shape({
  password: Yup.string().required('Password Required'),
  email: Yup.string().email('Invalid email').required('Email required'),
});
