import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <EmptyState
        title="৪০৪ - পাতাটি পাওয়া যায়নি"
        message="আপনি যে লিংকটি খুলেছেন সেটি ভুল বা মুছে ফেলা হয়েছে।"
      />
    </main>
  );
}