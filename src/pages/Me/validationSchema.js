import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email("Invalid email format").required("Required"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required();
