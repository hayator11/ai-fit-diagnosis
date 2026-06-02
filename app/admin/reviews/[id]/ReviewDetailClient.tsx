"use client";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ReviewDetailClient({ review, updateReviewStatus, convertReviewToUseCase }: {
  review: any;
  updateReviewStatus: (formData: FormData) => Promise<void>;
  convertReviewToUseCase: (formData: FormData) => Promise<void>;
}) {
  const [converting, setConverting] = useState(false);

  async function handleConvert(formData: FormData) {
    setConverting(true);
    await convertReviewToUseCase(formData);
  }

  return (
    <Card className="mt-6">
      <form action={updateReviewStatus} className="space-y-3">
        <input type="hidden" name="id" value={review.id} />
        <select name="status" defaultValue={review.status} className="w-full rounded-lg border border-line p-3">
          {["pending", "reviewed", "approved", "rejected", "converted_to_use_case"].map((item) => <option key={item}>{item}</option>)}
        </select>
        <textarea name="admin_note" defaultValue={review.admin_note ?? ""} rows={4} className="w-full rounded-lg border border-line p-3" placeholder="管理メモ" />
        <Button type="submit">ステータスを保存</Button>
      </form>
      <form action={handleConvert} className="mt-3">
        <input type="hidden" name="id" value={review.id} />
        <Button type="submit" variant="secondary" disabled={converting}>
          {converting ? "変換中..." : "使用例に変換"}
        </Button>
      </form>
    </Card>
  );
}
