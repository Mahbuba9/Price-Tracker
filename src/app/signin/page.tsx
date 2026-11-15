import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-center text-2xl font-bold">সাইন ইন</h1>
      <p className="mb-6 mt-1 text-center text-sm opacity-70">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <SignInForm />
    </main>
  );
}