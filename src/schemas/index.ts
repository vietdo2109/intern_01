import * as Yup from "yup";
import * as Joi from "joi";

export const loginFormSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
});

export const SignUpJoiSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .min(8) // Minimum length 8 characters
    .pattern(new RegExp("(?=.*[a-z])")) // At least one lowercase letter
    .pattern(new RegExp("(?=.*[A-Z])")) // At least one uppercase letter
    .pattern(new RegExp("(?=.*[0-9])")) // At least one number
    .pattern(new RegExp("(?=.*[^a-zA-Z0-9])")) // At least one special character
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
  repeat_password: Joi.valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords must match",
  }),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
}).with("password", "repeat_password");
