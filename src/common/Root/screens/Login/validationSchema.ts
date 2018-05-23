import { object, string } from "yup";

export default object().shape({
  username: string()
    .min(3)
    .max(30)
    .required(),
  password: string()
    .min(6)
    .max(30)
    .required()
});
