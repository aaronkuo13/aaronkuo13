// src/app/projects/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "精選作品 | Aaron Kuo",
  description: "物聯網整合、金融數據平台、售票系統等精選專案列表。",
};

type Project = {
  title: string;
  desc: string;
  link: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "物聯網解決方案",
    desc:
      "協助傳統產業實現 IoT 整合，從零打造數據追蹤系統，將損耗數據化並建立預警機制，有效降低故障風險與成本。",
    link: "https://www.nexense.com.tw/solutions",
    tech: ["AWS DynamoDB", "AWS Lambda", "MQTT"],
  },
  {
    title: "國泰投信官網",
    desc:
      "整合數據中心與即時交易所資訊，打造直觀的投資資訊平台，提升投資者體驗與決策效率。",
    link: "https://www.cathaysite.com.tw/",
    tech: ["用戶訪談", "用戶模型", "使用者旅程"],
  },
  {
    title: "FunOne Tickets售票平台",
    desc:
      "主導打造 FunOne Tickets，5 個月 3000+ 會員、破百萬營收，涵蓋 UX、金流與實體票整合。",
    link: "https://tickets.funone.io/",
    tech: ["GCP", "瞬流乘載", "UX", "金流串接", "實體票串接"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold" style={{ color: "var(--brand)" }}>
          精選作品
        </h1>
        <p className="mt-2 text-gray-600">
          以下是我主導或深度參與的專案，聚焦在資料整合、使用者體驗與商業成效。
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <h3
              className="text-lg font-semibold group-hover:opacity-90"
              style={{ color: "var(--brand)" }}
            >
              {p.title} <span className="align-middle">↗</span>
            </h3>
            <p className="mt-2 line-clamp-4 text-gray-600">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-5">
        <h4 className="font-semibold">想看更多？</h4>
        <p className="mt-2 text-gray-600">
          實際投產的成效與決策歷程可以在會議或面談中分享，或寄信至{" "}
          <a
            href="mailto:aaronkuo13@gmail.com"
            className="underline"
            style={{ color: "var(--brand)" }}
          >
            aaronkuo13@gmail.com
          </a>
          取得更多資料。
        </p>
      </div>
    </section>
  );
}
