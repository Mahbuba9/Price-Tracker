import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 pb-10 pt-8">
      <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
      <p className="mb-5 mt-1 text-sm opacity-70">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>
      <ProfileCard />
    </main>
  );
}