"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationFormData } from "@/lib/validations";

export default function RecruitmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || "Submission failed");
        return;
      }

      const result = await response.json();
      console.log(result);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  const inputClass =
    "w-full rounded-md bg-[#0a192f] border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Application Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
            className="w-full rounded-md bg-[#0a192f] border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Roll Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Roll Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your roll number"
            {...register("roll")}
            className="w-full rounded-md bg-[#0a192f] border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.roll && (
            <p className="text-red-500 text-xs mt-1">{errors.roll.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className="w-full rounded-md bg-[#0a192f] border border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="10-digit phone number"
            {...register("phone")}
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            WhatsApp Number
          </label>
          <input
            type="text"
            placeholder="10-digit WhatsApp number"
            {...register("whatsapp")}
            className={inputClass}
          />
          {errors.whatsapp && (
            <p className={errorClass}>{errors.whatsapp.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Domain <span className="text-red-500">*</span>
          </label>
          <select {...register("domain")} className={inputClass}>
            <option value="">Select a domain</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Competitive Programming">
              Competitive Programming
            </option>
            <option value="Design">Design</option>
            <option value="Other">Other</option>
          </select>
          {errors.domain && (
            <p className={errorClass}>{errors.domain.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Resume URL</label>
          <input
            type="url"
            placeholder="Google Drive link"
            {...register("resumeUrl")}
            className={inputClass}
          />
          {errors.resumeUrl && (
            <p className={errorClass}>{errors.resumeUrl.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Portfolio URL
          </label>
          <input
            type="url"
            placeholder="Portfolio link"
            {...register("portfolioUrl")}
            className={inputClass}
          />
          {errors.resumeUrl && (
            <p className={errorClass}>{errors.resumeUrl.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Linkedin URL</label>
          <input
            type="url"
            placeholder="Linkedin link"
            {...register("linkedinUrl")}
            className={inputClass}
          />
          {errors.resumeUrl && (
            <p className={errorClass}>{errors.resumeUrl.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Github URL</label>
          <input
            type="url"
            placeholder="Github link"
            {...register("githubUrl")}
            className={inputClass}
          />
          {errors.resumeUrl && (
            <p className={errorClass}>{errors.resumeUrl.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Past Experience
          </label>
          <textarea
            rows={3}
            {...register("pastExperience")}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Other Societies
          </label>
          <textarea
            rows={3}
            {...register("otherSocieties")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            How did you hear about us?
          </label>
          <select {...register("hearAboutUs")} className={inputClass}>
            <option value="">Select</option>
            <option value="Instagram">Instagram</option>
            <option value="Friends">Friends</option>
            <option value="Seniors">Seniors</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Referral (Roll Number)
          </label>
          <input type="text" {...register("referral")} className={inputClass} />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-sm font-medium hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
