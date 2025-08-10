export default function AboutPage() {
    return (
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4 leading-7 text-gray-700">
          這裡寫你的背景、技能與興趣。可以用幾個段落介紹你做過的事、擅長的技術棧、以及目前在找什麼機會。
        </p>
        <ul className="mt-6 list-disc pl-6 text-gray-700">
          <li>React / Next.js、TypeScript</li>
          <li>Tailwind CSS、UI/UX</li>
          <li>Node.js / Serverless / Vercel</li>
        </ul>
      </section>
    );
  }
  