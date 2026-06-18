import Link from "next/link";

const items = [
  ["ダッシュボード", "/admin"],
  ["レビュー", "/admin/reviews"],
  ["使用例", "/admin/use-cases"],
  ["AIツール", "/admin/tools"],
  ["更新情報", "/admin/updates"],
  ["診断ロジック", "/admin/diagnosis"],
  ["玉手箱", "/admin/tamatebako"]
];

export function AdminNav() {
  return (
    <nav className="mb-6 flex flex-wrap gap-2">
      {items.map(([label, href]) => (
        <Link key={href} href={href} className="rounded-lg border border-line bg-white px-3 py-2 text-sm hover:bg-slate-50">
          {label}
        </Link>
      ))}
    </nav>
  );
}
