// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/app/data/projects";

// 產生靜態路由參數
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ params 在你的型別環境下是 Promise，需要 async/await
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: "Project Not Found" };
  return {
    title: `${p.title} | Aaron Kuo`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

// ✅ 頁面本身也把 params 當 Promise 處理
export default async function ProjectDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/projects" className="text-sm hover:underline">
        ← 返回列表
      </Link>

      <h1 className="mt-3 text-3xl font-bold" style={{ color: "var(--brand)" }}>
        {p.title}
      </h1>

      <p className="mt-3 text-gray-700">{p.summary}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {p.kpis?.length ? (
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">關鍵成果（KPI）</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {p.kpis.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
        ) : null}

        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold">資訊</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            {p.role && <li><b>角色：</b>{p.role}</li>}
            {p.timeframe && <li><b>時間：</b>{p.timeframe}</li>}
            <li><b>技術 / 方法：</b>{p.stack.join("、")}</li>
            {p.link && (
              <li>
                <b>連結：</b>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                  style={{ color: "var(--brand)" }}
                >
                  前往
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {p.content && (
        <div className="prose prose-slate mt-8 max-w-none">
          {p.content.split("\n").map((line, i) => <p key={i}>{line}</p>)}
        </div>
      )}
    </article>
  );
}
