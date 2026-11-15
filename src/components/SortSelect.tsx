"use client";

export type SortOption = "default" | "asc" | "desc";

export default function SortSelect({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (v: SortOption) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="opacity-70">সাজান</span>
      <select
        className="select select-bordered select-sm"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        <option value="default">ডিফল্ট</option>
        <option value="asc">দাম: কম থেকে বেশি</option>
        <option value="desc">দাম: বেশি থেকে কম</option>
      </select>
    </label>
  );
}