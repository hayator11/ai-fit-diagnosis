import type { Metadata } from "next";
import { DiagnosisResult } from "@/components/diagnosis/DiagnosisResult";
import { getPublishedUseCases } from "@/lib/data/queries";

export const metadata: Metadata = {
  title: "診断結果",
  robots: {
    index: false,
    follow: true
  }
};

export default async function ResultPage({ searchParams }: { searchParams: Promise<{ type?: string; tools?: string }> }) {
  const params = await searchParams;
  const relatedUseCases = await getPublishedUseCases();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <DiagnosisResult typeKey={params.type ?? "producer"} tools={(params.tools ?? "").split(",").filter(Boolean)} relatedUseCases={relatedUseCases.slice(0, 3)} />
    </div>
  );
}
