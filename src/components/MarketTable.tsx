import { formatPrice } from "@/lib/format";
import type { Market } from "@/lib/types";

export default function MarketTable({ markets }: { markets: Market[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>বাজার</th>
            <th>বিভাগ</th>
            <th className="text-right">সর্বনিম্ন</th>
            <th className="text-right">সর্বোচ্চ</th>
            <th className="text-right">গড়</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((m) => {
            const avg = (m.min + m.max) / 2;
            return (
              <tr key={`${m.market}-${m.division}`}>
                <td className="font-medium">{m.market}</td>
                <td>{m.division}</td>
                <td className="text-right">{formatPrice(m.min)} টাকা</td>
                <td className="text-right">{formatPrice(m.max)} টাকা</td>
                <td className="text-right font-semibold">
                  {formatPrice(avg)} টাকা
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}