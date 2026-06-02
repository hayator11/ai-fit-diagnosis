import { Badge } from "@/components/ui/Badge";

export function StatusBadge({ value }: { value?: string | null }) {
  const label = value ?? "unknown";
  return <Badge className={label.includes("published") || label === "approved" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : ""}>{label}</Badge>;
}
