"use server";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateField = LoginSchema.safeParse(values);

  if (!validateField.success) return { error: "invalid fields" };

  return { success: "Login successfull" };
};
