import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, { // Optional: Add a max length
    message: "Message must not exceed 500 characters."
  }),
});

// Infer the type from the schema
export type ContactFormValues = z.infer<typeof contactFormSchema>;