export default function ContactPage() {
    return (
      <section className="mx-auto max-w-xl px-6 py-12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600">歡迎透過下方表單與我聯絡。</p>
  
        {/* 先佔位；拿到 Formspree/Getform ID 後把 action 換掉即可 */}
        <form
          action="https://example.com/your-form-endpoint"
          method="POST"
          className="mt-6 space-y-4"
        >
          <input
            name="name"
            placeholder="姓名"
            className="w-full rounded-xl border px-3 py-2"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="留言內容"
            className="w-full rounded-xl border px-3 py-2 h-32"
            required
          />
          <button
            type="submit"
            className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
          >
            送出
          </button>
        </form>
      </section>
    );
  }
  