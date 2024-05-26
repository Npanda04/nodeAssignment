import { z } from "zod";

export const FillDataSchema = z.object({
  uniqueId: z.string(),
  name: z.string(),
  email: z.string().email(),
  number: z.string(),
  ifGraduated: z.boolean(),
});

export const QuerySchema = z.object({
  title: z.string(),
});

export type FillDataDtoQuery = z.infer<typeof QuerySchema>;

export type FillDataDto = z.infer<typeof FillDataSchema>;
