import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 lg:px-12">
        {/* Top navigation */}
        <header className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold tracking-tight text-purple-400">
            devfolio
          </div>
          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero + About section with profile info */}
        <main className="mt-14 flex-1">
          <section
            id="about"
            className="grid gap-10 text-center md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.5fr)] md:items-center md:gap-16 md:text-left"
          >
            {/* Info block */}
            <div className="order-2 space-y-4 md:order-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-500">
                  Your headline
                </p>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-zinc-500 to-transparent md:mt-4" />
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  Your Name Here
                </h1>
                <p className="text-base font-medium text-zinc-300">
                  Role or short title goes here
                </p>
              </div>

              <div className="mt-6 grid gap-x-10 gap-y-2 text-sm text-zinc-300 md:grid-cols-2">
                <div className="flex gap-2">
                  <span className="w-24 text-zinc-500">Location:</span>
                  <span>City, Country</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-24 text-zinc-500">Experience:</span>
                  <span>Your focus or role</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-24 text-zinc-500">Email:</span>
                  <span className="break-all">your.email@example.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-24 text-zinc-500">Status:</span>
                  <span className="font-medium text-emerald-400">Open to opportunities</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-400">
                Add a short sentence about yourself, how you work, or what you
                love to build. Keep it to one or two lines.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/cv.pdf"
                  className="flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-2 text-sm font-medium text-black transition hover:bg-white"
                >
                  <span className="text-base">↓</span>
                  Download CV
                </a>
                <div className="flex gap-3 text-zinc-400">
                  {[
                    { label: "G", href: "#" },
                    { label: "L", href: "#" },
                    { label: "I", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-xs font-semibold hover:border-zinc-400 hover:text-zinc-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile image */}
            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 shadow-[0_0_80px_rgba(0,0,0,0.9)] sm:h-64 sm:w-64">
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-800" />
                <div className="relative h-52 w-52 overflow-hidden rounded-full sm:h-60 sm:w-60">
                  <Image
                    src="/profile.jpg"
                    alt="Your profile photo"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 16rem, 14rem"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Skills & Technologies */}
        <section id="skills" className="mt-20 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Skills &amp; Technologies
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400">
            A selection of tools I use regularly to ship production-quality
            software.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Frontend",
                tags: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ],
              },
              {
                title: "Backend",
                tags: ["Node.js", "Express", "Prisma", "REST", "GraphQL"],
              },
              {
                title: "Workflow",
                tags: ["Git", "GitHub", "Testing", "Figma", "CI/CD"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
              >
                <div>
                  <h3 className="text-sm font-semibold text-zinc-50">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience timeline */}
        <section id="experience" className="mt-20 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Experience
          </h2>
          <div className="relative mt-6 space-y-8">
            <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-purple-400/80 via-purple-500/40 to-transparent" />
            {[
              {
                year: "2025",
                role: "Senior Frontend Engineer",
                company: "Acme Studio",
                body:
                  "Leading the frontend for design-focused products, building component libraries and high-fidelity interfaces.",
              },
              {
                year: "2023",
                role: "Software Engineer",
                company: "Product Co",
                body:
                  "Shipped features across the stack with a focus on performance, accessibility, and maintainable code.",
              },
            ].map((item) => (
              <article key={item.year} className="relative flex gap-6 pl-10">
                <div className="absolute left-0 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.7)]">
                  {item.year}
                </div>
                <div className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-5">
                  <h3 className="text-sm font-semibold text-zinc-50">
                    {item.role}
                  </h3>
                  <p className="text-xs font-medium text-purple-300">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm text-zinc-400">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Selected Projects
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Defi Horizons",
                description:
                  "High-impact landing page for a fintech product with motion, glassmorphism, and responsive layout.",
              },
              {
                title: "Portfolio OS",
                description:
                  "A personal design system and component library powering multiple client sites.",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(39,39,42,0.9),#020617)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.8)] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-zinc-900/70 px-3 py-1 text-[11px] text-zinc-300">
                    Case Study
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-400">{project.description}</p>
                <div className="mt-4 text-xs font-medium text-purple-300 opacity-0 transition-opacity group-hover:opacity-100">
                  View details →
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-zinc-900 pt-10 md:flex-row md:items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Let&apos;s build something sharp.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-400">
              Open to freelance work, product collaborations, and frontend-focused
              roles. Tell me about your idea and we&apos;ll bring it to life.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-zinc-300">
            <a
              href="mailto:you@example.com"
              className="rounded-full bg-zinc-100 px-6 py-2 text-center font-medium text-black transition hover:bg-white"
            >
              Email Me
            </a>
            <div className="flex justify-end gap-4 text-xs text-zinc-500">
              <a href="#" className="hover:text-zinc-300">
                GitHub
              </a>
              <a href="#" className="hover:text-zinc-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-zinc-300">
                Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
