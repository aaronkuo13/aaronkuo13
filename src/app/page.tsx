import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Hello, I’m <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="mt-4 text-gray-600">
          前端工程師 / 設計愛好者 — 這裡是我的個人網站與作品集。
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-xl px-5 py-2.5 bg-blue-600 text-white hover:opacity-90"
          >
            看作品
          </Link>
          <Link
            href="/contact"
            className="rounded-xl px-5 py-2.5 border border-gray-300 hover:bg-gray-50"
          >
            聯絡我
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { title: "快速", desc: "Next.js 的最佳化與快取讓你的站點飛快。" },
          { title: "美觀", desc: "Tailwind CSS 讓樣式直覺、可維護。" },
          { title: "好部署", desc: "一鍵部署到 Vercel，綁網域也超簡單。" },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
