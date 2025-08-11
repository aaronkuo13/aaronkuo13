"use client";

import { useState } from "react";

type Props = {
  endpoint: string; // 你的 Formspree ID，例如 https://formspree.io/f/abc123
};

export default function ContactForm({ endpoint }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        setMsg("已送出，感謝你的來信！我會盡快回覆。");
        form.reset();
      } else {
        setStatus("error");
        setMsg("送出失敗，稍後再試或直接寄信到 aaronkuo13@gmail.com。");
      }
    } catch {
      setStatus("error");
      setMsg("送出失敗，稍後再試或直接寄信到 aaronkuo13@gmail.com。");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* 蜜罐欄位（反垃圾） */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      {/* 可選：郵件主旨 */}
      <input type="hidden" name="_subject" value="網站聯絡表單新訊息" />
      {/* 可選：成功跳轉頁（若想要） */}
      {/* <input type="hidden" name="_next" value="https://你的網域/contact?ok=1" /> */}

      <div>
        <label className="block text-sm font-medium">姓名</label>
        <input name="name" required className="mt-1 w-full rounded-lg border px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded-lg border px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">訊息</label>
        <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border px-4 py-2" />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg px-6 py-2 text-white transition"
        style={{ backgroundColor: "var(--brand)" }}
      >
        {status === "loading" ? "送出中…" : "送出"}
      </button>

      {status !== "idle" && (
        <p className={`text-sm ${status === "ok" ? "text-green-600" : "text-red-600"}`}>{msg}</p>
      )}
    </form>
  );
}
