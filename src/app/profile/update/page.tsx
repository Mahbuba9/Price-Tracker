import UpdateProfileForm from "@/components/UpdateProfileForm";

export default function UpdateProfilePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 pb-10 pt-8">
      <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
      <p className="mb-5 mt-1 text-sm opacity-70">
        আপনার নাম পরিবর্তন করুন।
      </p>
      <UpdateProfileForm />
    </main>
  );
}