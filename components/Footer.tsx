export default function Footer() {
    return (
      <footer className="mt-12 border-t">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name · Built with Next.js & Tailwind
        </div>
      </footer>
    );
  }
  