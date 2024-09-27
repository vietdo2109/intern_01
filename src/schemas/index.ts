import * as Yup from "yup";
import * as Joi from "joi";

export const loginFormSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
});

export const SignUpJoiSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"))
    .message("contains at least eight characters, one letter and one number"),
  repeat_password: Joi.valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords must match",
  }),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
}).with("password", "repeat_password");
