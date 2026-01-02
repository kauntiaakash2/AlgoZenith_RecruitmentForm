"use client";

import { useState } from "react";

export default function RecruitmentForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">
          AlgoZenith Recruitment
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Tech Society Applications • DSA • Competitive Programming
        </p>

        <form className="space-y-8">
          {/* BASIC INFO */}
          <section>
            <h2 className="text-lg text-purple-400 mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="input" placeholder="Full Name *" />
              <input className="input" placeholder="Roll Number *" />
              <input className="input" placeholder="Email *" />
              <input className="input" placeholder="Phone" />
              <input
                className="input md:col-span-2"
                placeholder="WhatsApp Number"
              />
            </div>
          </section>

          {/* TECH PROFILE */}
          <section>
            <h2 className="text-lg text-green-400 mb-4">Technical Profile</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <select className="input">
                <option>Select Domain *</option>
                <option>DSA</option>
                <option>Web Development</option>
                <option>CP</option>
                <option>AI / ML</option>
              </select>
              <input className="input" placeholder="Resume URL *" />
              <input className="input" placeholder="Portfolio URL" />
              <input className="input" placeholder="LinkedIn URL" />
              <input className="input md:col-span-2" placeholder="GitHub URL" />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h2 className="text-lg text-yellow-400 mb-4">Experience</h2>
            <textarea className="input h-24" placeholder="Past Experience" />
            <textarea
              className="input h-24 mt-4"
              placeholder="Other Societies"
            />
          </section>

          {/* MISC */}
          <section>
            <h2 className="text-lg text-pink-400 mb-4">Miscellaneous</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <select className="input">
                <option>How did you hear about us?</option>
                <option>Instagram</option>
                <option>Friends</option>
                <option>WhatsApp</option>
              </select>
              <input className="input" placeholder="Referral Roll Number" />
            </div>
          </section>

          <button
            disabled={loading}
            className="w-full py-3 mt-6 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold text-black"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          border-radius: 0.5rem;
          color: #e5e7eb;
          outline: none;
        }
        .input:focus {
          border-color: #3b82f6;
        }
      `}</style>
    </div>
  );
}
