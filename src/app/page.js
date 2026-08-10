"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "AV-Scheduler",
    description: "Web application for managing task assignments, inventory, and key distribution within the AV Team at Asia-Pacific International University.",
    whatIDid: "Built a robust system to assign tasks to team members based on availability and skills. Integrated inventory management and key tracking systems for active member coordination.",
    used: ["Next.js", "Laravel", "PostgreSQL", "Docker", "Microsoft OAuth 2.0"],
    additionalInfo: "Currently in active use by APIU Media Services Team",
    type: "Web Application"
  },
  {
    title: "algorithm_for_students",
    description: "Mobile application visualizing sorting algorithms for students with interactive games and synchronized audio cues.",
    whatIDid: "Designed the full UI/UX flow and implemented the application logic in Flutter, integrating dynamic sorting animations and interactive game components.",
    used: ["Flutter", "Firebase Cloud Firestore", "Firebase Remote Config"],
    type: "Mobile Application"
  },
  {
    title: "HabbyKo",
    description: "A clean, intuitive habit and goal tracker mobile application.",
    whatIDid: "Designed the interactive UI/UX layout and implemented the application utilizing Riverpod for global state management and Firebase for cloud syncing.",
    used: ["Flutter", "Firebase Cloud Firestore", "Firebase Authentication", "Riverpod"],
    type: "Mobile Application"
  },
  {
    title: "System for Purchasing and Inventory (SPI)",
    description: "University-wide web application for purchasing and inventory management, built in collaboration with university alumni.",
    whatIDid: "Primarily responsible for frontend architecture, implementing responsive interfaces, dashboard analytics, and clean inventory tables.",
    used: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "Web Application"
  },
  {
    title: "excel_to_lowerthird",
    description: "Automation script generating PowerPoint lowerthird graphics from Excel sheets for graduation livestreaming.",
    whatIDid: "Created a Python script that parses excel data sheets and dynamically builds PowerPoint slides based on structured graduation templates.",
    used: ["Python"],
    type: "Python Script"
  },
  {
    title: "pdf_to_ppt",
    description: "AI tool that scans PDF documents and converts them into structured, readable presentation slides.",
    whatIDid: "Developed a script integrating the Gemini API to analyze document layout, parse unstructured text, and assemble cohesive slides.",
    used: ["Python", "Google Cloud AI", "Gemini API"],
    type: "AI Tool"
  }
];

const getDisplayDate = (item) => {
  if (item.date) return item.date;
  const yearStr = String(item.year);
  const monthStr = String(item.month || "");

  if (yearStr.includes("-")) {
    const years = yearStr.split("-").map(y => y.trim());
    const months = monthStr.includes("-")
      ? monthStr.split("-").map(m => m.trim())
      : [monthStr, monthStr];

    return `${months[0]} ${years[0]} - ${months[1] || months[0]} ${years[1]}`;
  }
  return `${item.month} ${item.year}`;
};

const getCircleYear = (year) => {
  const yearStr = String(year);
  if (yearStr.includes("-")) {
    return yearStr
      .split("-")
      .map((y) => y.trim().slice(-2))
      .join("-");
  }
  return yearStr;
};

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 lg:px-12">
        {/* Top navigation */}
        <header className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold tracking-tight text-orange-400">
            PEKKO.
          </div>
          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#education" className="hover:text-white">
              Education
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

        {/* Hero + About section styled like a CV intro */}
        <main className="mt-14 flex-1">
          <section id="about" className="space-y-10">
            {/* Intro heading */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-zinc-400">
                  Introduction
                </p>
                <div className="hidden h-px flex-1 bg-zinc-700 sm:block" />
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.6fr)] md:items-start">
              {/* Profile and contact column */}
              <div className="space-y-6">
                <div className="flex justify-center md:justify-start">
                  <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 shadow-[0_0_80px_rgba(0,0,0,0.9)] sm:h-64 sm:w-64">
                    <div className="absolute inset-2 rounded-full border border-zinc-700/80" />
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

                <div className="space-y-1 text-center md:text-left">
                  <h1 className="text-lg font-semibold tracking-[0.3em] uppercase text-zinc-100">
                    Pann Ei Ko Ko (Pekko)
                  </h1>
                  <p className="text-sm text-zinc-400">Software Developer</p>
                </div>

                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start justify-center gap-3 md:justify-start">
                    <span className="mt-[3px] text-xs">📍</span>
                    <span>Saraburi, Thailand</span>
                  </div>
                  <div className="flex items-start justify-center gap-3 md:justify-start">
                    <span className="mt-[3px] text-xs">✉️</span>
                    <a
                      href="mailto:pekkodev@gmail.com"
                      className="break-all hover:underline"
                    >
                      pekkodev@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start justify-center gap-3 md:justify-start">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-[3px] h-4 w-4 fill-current text-zinc-400">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <a
                      href="https://github.com/p-e-koko/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 hover:underline transition-colors break-all"
                    >
                      @p-e-koko
                    </a>
                  </div>
                </div>
              </div>

              {/* Intro text column with education in the lower area */}
              <div className="flex flex-col justify-between space-y-8 text-left text-base leading-relaxed text-zinc-300 md:min-h-[320px]">
                <div className="space-y-4">
                  <p>
                    Hi, I'm Pann Ei Ko Ko, an IT senior student at Asia-Pacific International University with a passion for building practical and user-friendly software solutions.
                    I enjoy working on web and mobile applications, especially projects that combine clean design with efficient functionality.
                  </p>
                  <p>
                    Throughout my academic and personal projects, I have collaborated with teams to design, develop, and deploy software solutions while continuously improving my problem-solving and technical skills. I'm particularly interested in web development, software engineering, and learning new technologies that help create meaningful digital experiences.
                  </p>
                  <p>
                    Outside of technology, I really enjoy playing badminton.
                  </p>
                </div>

                <section
                  id="education"
                  className="mt-6 space-y-3 bg-zinc-950/40 p-5 text-sm"
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-semibold tracking-[0.25em] text-zinc-200">
                      Education
                    </h2>
                    <div className="h-px flex-1 bg-zinc-800" />
                  </div>

                  <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] gap-6 text-zinc-300">
                    {/* Years + vertical line */}
                    <div className="relative flex flex-col items-start text-base font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      <span>Now</span>
                      <span className="mt-10">2021</span>
                      <div className="pointer-events-none absolute left-[22px] top-2 bottom-1 w-px bg-zinc-600" />
                    </div>

                    {/* Schools */}
                    <div className="space-y-7 text-sm sm:text-[15px]">
                      <div>
                        <p className="text-base font-semibold text-zinc-100">
                          Asia-Pacific International University
                        </p>
                        <p className="text-xs text-zinc-400 sm:text-sm">
                          Bachelor of Science in Information Technology
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-zinc-100">
                          Ayeyarwaddy Adventist Seminary
                        </p>
                        <p className="text-xs text-zinc-400 sm:text-sm">
                          Adventist Highschool
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
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
                ],
              },
              {
                title: "Backend",
                tags: ["Node.js", "JavaScript", "Python", "MySQL", "PostgreSQL", "REST", "Firebase"],
              },
              {
                title: "Tools",
                tags: ["Git", "GitHub", "Docker", "Figma", "Postman", "VS Code", "Antigravity"],
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
                      className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-medium text-orange-200"
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
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            {/* Within university */}
            <div className="relative space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Within university
              </h3>
              <div className="absolute left-[18px] top-10 bottom-0 w-px bg-gradient-to-b from-orange-400/80 via-orange-500/40 to-transparent" />
              {[
                {
                  year: "2023-2026",
                  month: "Aug - Now",
                  role: "IT Support (Student Assistant)",
                  place: "APIU Technology Services",
                  body:
                    "Maintain and troubleshoot computer software, and network issues. Provide technical assistance to students and staff.",
                },
                {
                  year: "2024 - 2026",
                  month: "Jan - Now",
                  role: "Audio/Visual Team Member",
                  place: "APIU Media Services",
                  body:
                    "Provide technical support for audio and video equipment during campus events. Responsible for setting up, operating, and troubleshooting equipment such as microphones, speakers, projectors, and screens.",
                },
                {
                  year: "2024 - 2025",
                  month: "May - July",
                  role: "Audio/Visual Team Coordinator",
                  place: "APIU Media Services",
                  body:
                    "Lead a team of students responsible for managing audio and video equipment during campus events. Assigning tasks, coordinate event technical setup and operation for various events, including presentations, performances, and worship services. Train team members on equipment handling and troubleshooting.",
                },
              ].map((item) => (
                <article key={`${item.year}-${item.role}`} className="relative flex gap-6 pl-10">
                  <div className="absolute left-0 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.7)]">
                    {getCircleYear(item.year)}
                  </div>
                  <div className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-5">
                    <h4 className="text-sm font-semibold text-zinc-50">
                      {item.role}
                    </h4>
                    <p className="text-xs font-medium text-orange-300">{item.place}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                      {getDisplayDate(item)}
                    </p>
                    <p className="mt-3 text-sm text-zinc-400">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Outside university */}
            <div className="relative space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Outside university
              </h3>
              <div className="absolute left-[18px] top-10 bottom-0 w-px bg-gradient-to-b from-orange-400/80 via-orange-500/40 to-transparent" />
              {[
                {
                  year: "2025 - 2026",
                  month: "Jun - Feb",
                  role: "Junior Software Developer",
                  place: "DH Digilab Co., Ltd.",
                  body:
                    "Collaborated with senior developers to design, develop, and maintain web applications using ThreeJS, React, TypeScript, and Tailwind CSS. Mainly focus on Digital Twin concept and IoT ",
                },

                {
                  year: "2024 - 2025",
                  month: "Jan - Jan",
                  role: "Web Master",
                  place: "SEUM: Southeast Union Mission.",
                  body:
                    "Collaborated with senior developers to design, develop, and maintain web applications using ThreeJS, React, TypeScript, and Tailwind CSS. Mainly focus on Digital Twin concept and IoT ",
                },
              ].map((item) => (
                <article key={`${item.year}-${item.role}`} className="relative flex gap-6 pl-10">
                  <div className="absolute left-0 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.7)]">
                    {getCircleYear(item.year)}
                  </div>
                  <div className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-5">
                    <h4 className="text-sm font-semibold text-zinc-50">
                      {item.role}
                    </h4>
                    <p className="text-xs font-medium text-orange-300">{item.place}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                      {getDisplayDate(item)}
                    </p>
                    <p className="mt-3 text-sm text-zinc-400">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Selected Projects
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                onClick={() => setActiveProject(project)}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(39,39,42,0.9),#020617)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-zinc-700/80"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-zinc-50 group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-orange-500/10 border border-orange-500/25 px-2.5 py-0.5 text-[10px] font-medium text-orange-300">
                    {project.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-400 line-clamp-2">{project.description}</p>

                {/* Tech tags on card */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.used.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400">
                      {tech}
                    </span>
                  ))}
                  {project.used.length > 3 && (
                    <span className="rounded bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-500">
                      +{project.used.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-orange-300 transition-all duration-300 group-hover:translate-x-1">
                  View details <span className="transition-transform group-hover:translate-x-0.5">→</span>
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
              href="mailto:pekkodev@gmail.com"
              className="rounded-full bg-zinc-100 px-6 py-2 text-center font-medium text-black transition hover:bg-white"
            >
              Email Me
            </a>
            <div className="flex justify-end gap-4 text-xs text-zinc-500">
              <a
                href="https://github.com/p-e-koko/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300"
              >
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

        {/* Modal Overlay */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fade-in"
            onClick={() => setActiveProject(null)}
          >
            {/* Modal Body */}
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-10 shadow-2xl shadow-orange-950/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute right-6 top-6 rounded-full border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <span className="rounded-full bg-orange-500/10 border border-orange-500/25 px-2.5 py-0.5 text-xs font-medium text-orange-300">
                    {activeProject.type}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-zinc-50">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Two Column Grid */}
                <div className={`grid gap-8 ${(activeProject.title === "AV-Scheduler" || activeProject.title === "algorithm_for_students") ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]" : "lg:grid-cols-1"}`}>
                  {/* Left Column: Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        About the Project
                      </h4>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-zinc-300">
                        {activeProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        What I Did
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {activeProject.whatIDid}
                      </p>
                    </div>

                    {activeProject.additionalInfo && (
                      <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                        <p className="text-xs text-orange-300 leading-relaxed">
                          💡 <strong>Status:</strong> {activeProject.additionalInfo}
                        </p>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Technologies & Tools Used
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {activeProject.used.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Media Showcase */}
                  {(activeProject.title === "AV-Scheduler" || activeProject.title === "algorithm_for_students") && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Project Showcase
                      </h4>

                      {activeProject.title === "AV-Scheduler" && (
                        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                          <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
                            <div className="flex gap-1.5">
                              <span className="h-3 w-3 rounded-full bg-red-500/80" />
                              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                              <span className="h-3 w-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 flex-1 rounded bg-zinc-950 px-3 py-1 text-[10px] text-zinc-500 font-mono overflow-hidden whitespace-nowrap text-ellipsis flex items-center">
                              <span className="flex items-center gap-1.5 opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                Internal Tool (URL Hidden)
                              </span>
                            </div>
                          </div>
                          <div className="relative flex min-h-[260px] flex-col items-center justify-center border-t-0 border-zinc-800 bg-zinc-950/40 p-6 text-center">
                            <div className="w-full flex justify-center items-center py-4">
                              <div className="flex w-full flex-col gap-6 md:flex-row">
                                <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900 shadow-xl md:h-[320px]">
                                  <Image src="/images/av-scheduler-dark.png" alt="AV Scheduler Dark Mode" fill className="object-contain p-2" />
                                </div>
                                <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-zinc-700 bg-white shadow-xl md:h-[320px]">
                                  <Image src="/images/av-scheduler-light.png" alt="AV Scheduler Light Mode" fill className="object-contain p-2" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeProject.title === "algorithm_for_students" && (
                        <div className="mx-auto max-w-[280px] overflow-hidden rounded-[36px] border-4 border-zinc-800 bg-zinc-900/40 shadow-xl">
                          <div className="flex justify-center bg-zinc-900 py-2">
                            <div className="h-4 w-20 rounded-full bg-zinc-950" />
                          </div>
                          <div className="relative flex min-h-[500px] flex-col items-center justify-center bg-black p-0 text-center">
                            <div className="flex h-full w-full items-center justify-center overflow-hidden">
                              <video
                                src="/images/MicrosoftTeams-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
