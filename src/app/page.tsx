import Image from "next/image";
import Link from "next/link";

const DATA = {
  name: "Aaron Kuo",
  title: "Product Manager / 產品經理",
  tagline:
    "我擅長通過數據分析識別需求，專注從0到1的產品開發，將創意與現實結合，快速實現價值。數據是產品進化的核心，並貫徹於每個決策中，保證產品持續演進，達到最佳運營效果。",
  email: "aaronkuo13@gmail.com",
  location: "常駐台北・臺南人",
  avatar:
    "https://storage.googleapis.com/storage-aaronkuo-cloud1300904/20240928-DSC04194%201%20(1).png", // ← 請換成公開 URL
  socials: {
    github: "https://github.com/aaronkuo13",
    linkedin: "http://linkedin.com/in/aaron-kuo-985995181",
  },
  highlights: [
    "從 0 到 1 打造產品，驗證功能並解決核心問題",
    "深入追蹤並分析數據，精準識別用戶痛點",
    "促進跨部門協作與有效溝通，實現共同目標",
    "領導團隊實現商業價值，推動持續成長",
  ],
  skills: [
    "市場研究",
    "數據分析",
    "產品規劃與整合",
    "跨部門合作",
    "時間與資源管理",
    "UX與開發知識",
    "產品推廣與商業化",
    "領導與決策力",
  ],
  projects: [
    {
      title: "傳統產業物聯網整合",
      desc:
        "成功協助傳統產業公司實現物聯網整合，從零開始設計並構建內部數據追蹤系統。將無法追蹤的損耗轉化為數據化管理，實現預警機制，有效避免機器故障造成的金錢與名譽損失。",
      link: "https://www.nexense.com.tw/solutions",
      tech: ["AWS DynamoDB", "AWS Lambda", "MQTT"],
    },
    {
      title: "金融數據平台建構",
      desc:
        "協助國泰投信打造簡易直觀的數據平台，將數據中心與即時證券交易所資訊整合，為投資人提供定制化的投資信息展示，有效提升投資者體驗與決策效率。",
      link: "https://www.cathaysite.com.tw/",
      tech: ["用戶訪談", "用戶模型", "使用者旅程"],
    },
    {
      title: "售票平台創建",
      desc:
        "主導並成功打造一個全新的售票平台 FunOne Tickets，五個月內累積 3000+ 會員並實現百萬營收，展示出強大的市場吸引力與商業價值。",
      link: "https://tickets.funone.io/",
      tech: ["Google Cloud Platform", "瞬間大量吞吐", "UX", "金流串接", "實體票串接"],
    },
  ],
  cta: "projects" as const, // or "contact"
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* HERO */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border px-3 py-1 text-xs text-gray-600">
            {DATA.location}
          </span>
          <h1
            className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl"
            style={{ color: "var(--brand)" }}
          >
            {DATA.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-gray-800">{DATA.title}</p>
          <p className="mt-4 text-gray-600">{DATA.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={DATA.cta === "projects" ? "/projects" : "/contact"}
              className="rounded-xl px-5 py-2.5 text-white"
              style={{ backgroundColor: "var(--brand)" }}
            >
              {DATA.cta === "projects" ? "看精選作品" : "聯絡我"}
            </Link>
            <a
              href={`mailto:${DATA.email}`}
              className="rounded-xl border px-5 py-2.5 hover:bg-gray-50"
            >
              Email
            </a>
            <a
              href={DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-4 py-2.5 text-sm hover:bg-gray-50"
            >
              GitHub
            </a>
            <a
              href={DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-4 py-2.5 text-sm hover:bg-gray-50"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-gray-100 md:h-56 md:w-56">
            <Image
              src={DATA.avatar}
              alt={`${DATA.name} avatar`}
              fill
              sizes="(max-width: 768px) 12rem, 14rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">我能帶來的價值</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {DATA.highlights.map((h) => (
            <div key={h} className="rounded-2xl border p-4">
              {h}
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {DATA.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border px-3 py-1 text-sm text-gray-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">精選作品</h2>
          <Link href="/projects" className="text-sm hover:underline">
            查看全部 →
          </Link>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {DATA.projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border p-5 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold" style={{ color: "var(--brand)" }}>
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
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
      </section>
    </div>
  );
}