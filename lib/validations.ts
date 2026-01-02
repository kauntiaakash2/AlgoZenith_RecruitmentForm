import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  roll: z.string().min(1, "Roll number is required"),
  email: z.string().email("Invalid email address"),

  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone must be 10 digits")
    .optional()
    .or(z.literal("")),

  whatsapp: z
    .string()
    .regex(/^\d{10}$/, "WhatsApp must be 10 digits")
    .optional()
    .or(z.literal("")),

  domain: z.string().min(1, "Please select a domain"),

  resumeUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  portfolioUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  linkedinUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  githubUrl: z.string().url("Invalid URL").optional().or(z.literal("")),

  otherLinks: z.string().optional(),

  pastExperience: z.string().optional(),
  otherSocieties: z.string().optional(),

  hearAboutUs: z.string().optional(),
  referral: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
