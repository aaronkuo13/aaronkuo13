type Project = {
    title: string;
    desc: string;
    link?: string;
  };
  
  const projects: Project[] = [
    { title: "專案 A", desc: "一段簡短說明，做了什麼與技術重點。", link: "#" },
    { title: "專案 B", desc: "一段簡短說明，做了什麼與技術重點。", link: "#" },
    { title: "專案 C", desc: "一段簡短說明，做了什麼與技術重點。", link: "#" },
  ];
  
  export default function ProjectsPage() {
    return (
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="block rounded-2xl border p-5 hover:shadow"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>
    );
  }
  