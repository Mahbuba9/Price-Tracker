const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// 148 -> "১৪৮"
export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => bnDigits[Number(d)]);
}

// 1850 -> "১,৮৫০"
export function formatPrice(value: number): string {
  return toBn(value.toLocaleString("en-US"));
}

// 2.1 -> "২.১"
export function formatPercent(value: number): string {
  return toBn(Math.abs(value).toFixed(1));
}

// "১,৮৫০" -> 1850 (useful for sorting if data is ever in Bengali)
export function fromBn(value: string): number {
  const en = value
    .replace(/[০-৯]/g, (d) => String(bnDigits.indexOf(d)))
    .replace(/,/g, "");
  return Number(en);
}

// "মঙ্গলবার, ৬ অক্টোবর, ২০২৬"
export function banglaDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// "kg" -> "প্রতি কেজি"
export function unitLabel(unit: string): string {
  const map: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    liter: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
  };
  return map[unit.toLowerCase()] ?? `প্রতি ${unit}`;
}