// src/app/projects/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/app/data/projects"; // ← 相對路徑（或用 "@/data/projects" 看你的選擇）

export const metadata: Metadata = {
    title: "精選作品 | Aaron Kuo",
    description: "物聯網、金融數據平台、售票平台等專案整理。",
  };
  
  export default function ProjectsPage() {
    return (
      <section className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-6">
          <h1 className="text-3xl font-bold" style={{ color: "var(--brand)" }}>
            精選作品
          </h1>
          <p className="mt-2 text-gray-600">
            以下是我主導或深度參與的專案，聚焦資料整合、使用者體驗與商業成效。
          </p>
        </header>
  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="
                group block rounded-2xl border border-[var(--border)]
                bg-white/70 backdrop-blur
                p-5 transition-all duration-200
                hover:-translate-y-0.5 hover:border-[var(--brand)]
                hover:shadow-[0_12px_40px_rgba(25,50,85,0.18)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2
              "
            >
              <div className="flex items-start gap-2">
                <h3
                  className="text-lg font-semibold tracking-tight"
                  style={{ color: "var(--brand)" }}
                >
                  {p.title}
                </h3>
                <span className="translate-y-[2px] text-sm text-[var(--brand)] transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </div>
  
              <p className="mt-2 text-gray-600">{p.summary}</p>
  
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
  
              <div className="mt-4 h-px w-full bg-[var(--border)]/80" />
  
              <div className="mt-3 text-sm text-[var(--brand)] opacity-90 group-hover:opacity-100">
                查看詳情 →
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }