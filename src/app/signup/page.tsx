import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-center text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mb-6 mt-1 text-center text-sm opacity-70">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <SignUpForm />
    </main>
  );
}