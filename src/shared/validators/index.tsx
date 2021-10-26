import * as yup from 'yup';

export const UpdateProfileSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  CNH: yup.string().required(),
});
