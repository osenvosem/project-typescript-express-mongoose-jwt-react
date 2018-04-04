import yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(30)
    .required(),
  password: yup
    .string()
    .min(6)
    .max(30)
    .required()
});
