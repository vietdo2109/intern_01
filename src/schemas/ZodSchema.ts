import { patterns } from "../constants/patterns";
import { z } from "zod";

export const zodSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Required" })
    .refine((text) => patterns.email.test(text), {
      message: "Email not valid",
    }),
  states: z
    .array(z.string())
    .min(1, { message: "Required" })
    .max(2, { message: "maximum 2" }),
  languages: z.array(z.string()).min(1, { message: "Required" }),
  gender: z.string().min(1),
  skills: z.array(z.string()).min(1, { message: "Required" }),
  dob: z.coerce.date(),
  FEPeriod: z.array(z.coerce.date()).min(2).max(2),
  salaryRange: z.array(z.number()).min(2).max(2),
  isTeacher: z.boolean(),
});

export type Schema = z.infer<typeof zodSchema>;

export const defaultValues = {
  name: "",
  email: "",
  states: [],
  languages: [],
  gender: "1",
  skills: [],
  dob: new Date(),
  FEPeriod: [new Date(), new Date()],
  salaryRange: [10, 30],
  isTeacher: false,
};
