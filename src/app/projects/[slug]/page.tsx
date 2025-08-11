// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";             // ✅ 新增：使用 Next 的內部路由
import type { Metadata } from "next";
import { projects } from "@/app/data/projects"; // 依你的實際路徑而定

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project Not Found" };
  return {
    title: `${p.title} | Aaron Kuo`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

export default function ProjectDetail({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      {/* ✅ 用 Link 取代 a：內部導覽 */}
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
              {p.kpis.map((k) => (
                <li key={k}>{k}</li>
              ))}
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
                {/* 外部連結仍用 a */}
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
          {p.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </article>
  );
}
