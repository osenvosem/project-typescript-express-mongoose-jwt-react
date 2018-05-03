import yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(30)
    .required(),
  email: yup
    .string()
    .email()
    .max(60)
    .required(),
  firstName: yup
    .string()
    .min(2)
    .max(30),
  lastName: yup
    .string()
    .min(2)
    .max(30),
  password: yup
    .string()
    .min(6)
    .max(30)
});
