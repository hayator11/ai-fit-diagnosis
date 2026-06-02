"use client";
import { useState, useTransition } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ReviewDetailClient({ review, updateReviewStatus, convertReviewToUseCase }: {
  review: any;
  updateReviewStatus: (formData: FormData) => Promise<void>;
  convertReviewToUseCase: (formData: FormData) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  function handleConvert() {
    const formData = new FormData();
    formData.append("id", review.id);
    startTransition(() => convertReviewToUseCase(formData));
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
      <div className="mt-3">
        <Button variant="secondary" disabled={isPending} onClick={handleConvert}>
          {isPending ? "変換中..." : "使用例に変換"}
        </Button>
      </div>
    </Card>
  );
}
