import * as yup from 'yup';

export const updateProfileFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  driver_license: yup.string().required(),
});

export const signInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export const registerFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  username: yup.string().required().min(4).max(20),
  driver_license: yup.string().required(),
  password: yup.string().required().min(6),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must match'),
});

export const changePasswordFormSchema = yup.object().shape({
  current_password: yup.string().required().min(6),
  new_password: yup.string().required().min(6),
  new_password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('new_password')], 'Passwords must match'),
});
