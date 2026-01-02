// app/page.tsx
import RecruitmentForm from "@/components/RecruitmentForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">
            AlgoZenith Recruitment
          </h1>
          <p className="text-gray-400">Tech Society Applications</p>
        </header>

        {/* Card */}
        <div className="bg-[#0f2544] rounded-lg p-6 shadow-lg">
          <RecruitmentForm />
        </div>
      </div>
    </main>
  );
}
