import { object, string } from "yup";

export default object().shape({
  username: string()
    .min(3)
    .max(30)
    .required(),
  email: string()
    .email()
    .max(60)
    .required(),
  firstName: string()
    .min(2)
    .max(30),
  lastName: string()
    .min(2)
    .max(30),
  password: string()
    .min(6)
    .max(30)
    .required()
});
