import { z } from "zod";

export const CreateUserSchema = z.object({
  title: z.string(),
  name: z.string(),
  email: z.string().email(),
  number: z.string(),
  ifGraduated: z.boolean(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
