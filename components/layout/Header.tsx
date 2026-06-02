import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { PROJECT_NAME } from "@/lib/project";

const nav = [
  ["診断", "/diagnosis"],
  ["道具一覧", "/tools"],
  ["使用例", "/use-cases"],
  ["ロードマップ", "/roadmap"],
  ["実践ブログ", "/blog"],
  ["投稿", "/review"],
  ["更新情報", "/updates"],
  ["管理", "/admin"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-base font-bold tracking-tight">
          {PROJECT_NAME}
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm text-muted hover:bg-slate-100 hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/diagnosis" className="hidden md:inline-flex">
          診断する
        </ButtonLink>
      </div>
    </header>
  );
}
