import ContactForm from "../../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-bold" style={{ color: "var(--brand)" }}>
        聯絡我
      </h1>
      <p className="mt-2 text-gray-600">
        歡迎透過表單聯繫我，或直接寄信至{" "}
        <a href="mailto:aaronkuo13@gmail.com" className="underline">
          aaronkuo13@gmail.com
        </a>
      </p>

      {/* 這裡替換成你的 Formspree endpoint，例如 https://formspree.io/f/mnqyzabc */}
      <div className="mt-6">
        <ContactForm endpoint="https://formspree.io/f/xwpqyelk" />
      </div>
    </section>
  );
}
