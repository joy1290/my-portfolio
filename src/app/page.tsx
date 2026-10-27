"use client";

import { useState } from "react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {
  Globe,
  Download,
  ArrowDown,
  Menu,
  X,
  Code2,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React.js", level: 75, category: "Frontend" },
  { name: "Next.js", level: 70, category: "Frontend" },
  { name: "TypeScript", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js", level: 55, category: "Backend" },
  { name: "MongoDB", level: 60, category: "Database" },
  { name: "Git & GitHub", level: 75, category: "Tools" },
];

const projects = [
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    category: "Price Tracking Web Application",
    description:
      "A Bengali-language web application designed to help users explore daily market prices and compare product prices.",
    image: "🛒",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://bazardor-teal.vercel.app/",
    github: "https://github.com/joy1290/bazardor",
  },
 {
  id: "dream-team",
  title: "Dream Team 2026",
  category: "Player Selection Application",
  description:
    "A football player selection application where users can explore player cards, manage a coin budget, and select players for their team.",
  image: "⚽",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "React Icons",
    "React Toastify",
  ],
  live: "https://football-dream-11.netlify.app/",
  github: "https://github.com/joy1290/football-dream-11",
},
 
{
  id: "fit-log",
  title: "Gym Training System",
  category: "Gym Site Web Application",
  description:
    "FitLog is a dark, no-nonsense gym companion web app designed to help you track workouts, plan routines, and log every set with intent. Train hard, log honest!",
  image: "🏋️‍♂️",
  technologies: [
    "Next.js",
    "TypeScript",
    "Better Auth",
    "MongoDB",
    "Tailwind CSS",
  ],
  live: "https://fit-log-xi.vercel.app/",
  github: "https://github.com/joy1290/fit-log",
},

];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setSending(true);
    setFormMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
       {
  name: formData.get("name"),
  email: formData.get("email"),
  message: formData.get("message"),
},
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setFormMessage("Message sent successfully!");
      form.reset();
    }
catch (error: unknown) {
  if (error && typeof error === "object" && "text" in error) {
    console.error("EmailJS error:", error);
    console.error("Error details:", error.text);
  } else {
    console.error("Email sending failed:", error);
  }

  setFormMessage("Message could not be sent. Please try again.");
}
 finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#home" className="text-2xl font-extrabold tracking-tight">
            Joy<span className="text-blue-500">.dev</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 p-2 lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080b14] px-6 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl scroll-mt-20 flex-col items-center justify-center gap-14 px-6 pb-20 pt-32 md:flex-row md:px-10"
      >
        <div className="pointer-events-none absolute left-1/4 top-1/4 -z-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="z-10 w-full flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-lg text-gray-400">Hello, I&apos;m</p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Joy Gopal
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dhar
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-gray-200 sm:text-3xl">
             Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I am a Computer Science and Engineering graduate passionate about
            building responsive, accessible, and user-friendly web applications.
            I enjoy learning modern technologies and transforming ideas into
            practical digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-blue-500"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </a>

           
<a
  href="/resume.pdf"
  download="Joy_Gopal_Dhar_Resume.pdf"
  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Download Resume
</a>

          </div>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="https://github.com/joy1290"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              <Github size={21} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              <Linkedin size={21} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website and social profiles"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              <Globe size={21} />
            </a>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <div className="z-10 flex w-full flex-1 justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-600/30 via-cyan-500/10 to-purple-600/30 shadow-[0_0_80px_rgba(37,99,235,0.2)] sm:h-96 sm:w-96">
            <div className="absolute inset-3 rounded-full border border-dashed border-blue-400/40" />

         
<div className="h-56 w-56 overflow-hidden rounded-full border-2 border-blue-500 sm:h-72 sm:w-72">
  <img
    src="/profile6.jpg"
    alt="Joy Gopal Dhar - Web Developer"
    className="h-full w-full object-cover"
  />
</div>


            <div className="absolute -right-2 top-12 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl">
              <p className="text-sm font-semibold text-blue-400">Frontend</p>
              <p className="text-xs text-gray-400">Development</p>
            </div>

            <div className="absolute -bottom-3 -left-3 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl">
              <p className="text-sm font-semibold text-cyan-400">React.js</p>
              <p className="text-xs text-gray-400">Building UI</p>
            </div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-blue-400"
        >
          <ArrowDown size={24} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Get to know me
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              About <span className="text-blue-400">Me</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <Code2 size={45} className="mb-6 text-blue-400" />
              <h3 className="text-2xl font-bold">
                Turning ideas into digital experiences
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                My journey into programming began with an interest in how
                websites work. I started learning HTML and CSS, then moved on
                to JavaScript and modern frontend technologies. Building
                projects has helped me understand how to create interactive
                interfaces and solve real development problems.
              </p>
              <p className="mt-4 leading-8 text-gray-400">
                I enjoy designing clean user interfaces, learning new tools,
                and improving my code. Outside programming, I value continuous
                learning, creativity, and working with people to exchange ideas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Technologies Explored" },
                { value: "3+", label: "Projects Showcased" },
                { value: "100%", label: "Learning Mindset" },
                { value: "CSE", label: "Academic Background" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#101626] p-6 text-center transition hover:border-blue-500/50"
                >
                  <h3 className="text-3xl font-extrabold text-blue-400">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-24 bg-[#0b101c] px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              What I work with
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              My <span className="text-blue-400">Skills</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Technologies I have explored and used while learning and building
              web development projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {["Frontend", "Backend", "Database", "Tools"].map((category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category,
              );

              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category}
                  className="rounded-2xl border border-white/10 bg-[#101626] p-6 sm:p-8"
                >
                  <h3 className="mb-7 text-xl font-bold">{category}</h3>

                  <div className="space-y-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-sm text-blue-400">
                            {skill.level}%
                          </span>
                        </div>

                        <div
                          className="h-2 overflow-hidden rounded-full bg-white/10"
                          role="progressbar"
                          aria-label={skill.name}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={skill.level}
                        >
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="scroll-mt-24 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              My academic background
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Education
            </h2>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-[#101626] p-7 sm:p-10">
            <div className="absolute bottom-8 left-0 top-8 w-1 rounded-r-full bg-blue-500" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <GraduationCap size={30} />
              </div>

              <div>
                <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  Completed · 2026
                </span>
                <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                  Bachelor of Science in Computer Science and Engineering
                </h3>
                <p className="mt-2 text-gray-300">City University</p>
                <p className="mt-2 text-sm text-gray-500">
                  Savar, Dhaka, Bangladesh
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2">
                  <GraduationCap size={18} className="text-blue-400" />
                  <span className="text-sm text-gray-300">
                    CGPA: 3.27
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-[#0b101c] px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              My professional journey
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Experience & <span className="text-blue-400">Learning</span>
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101626] p-7 sm:p-9">
            <BriefcaseBusiness size={35} className="mb-5 text-blue-400" />
            <h3 className="text-xl font-bold">Web Development Projects</h3>
            <p className="mt-2 text-sm text-gray-500">
              Practical Learning & Project Development
            </p>
            <p className="mt-4 leading-7 text-gray-400">
              I have been developing practical projects using modern web
              technologies to improve my skills in responsive design,
              component-based development, API integration, and authentication.
              These projects help me gain hands-on experience and strengthen
              my problem-solving abilities.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-24 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Selected work
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              My <span className="text-blue-400">Projects</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              A selection of projects that demonstrate my learning and
              development skills.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101626] transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-purple-600/20">
                  <span className="text-7xl transition duration-300 group-hover:scale-110">
                    {project.image}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                   <a
  href={`/projects/${project.id}`}
  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
>
  View Details
  <ArrowUpRight size={16} />
</a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live website`}
                        className="inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-2.5 text-gray-300 transition hover:border-blue-400 hover:text-blue-400"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/joy1290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400"
            >
              <Github size={19} />
              More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
<section
  id="contact"
  className="scroll-mt-24 bg-[#0b101c] px-6 py-24 sm:px-10"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        Get in touch
      </p>

      <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
        Let&apos;s Work{" "}
        <span className="text-blue-400">Together</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
        Have a project or an opportunity? Send me a message.
        I would love to hear from you.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-2">
      {/* Contact Information */}
      <div className="space-y-5">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101626] p-6">
          <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
            <Mail size={25} />
          </span>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="mt-1 break-all font-semibold">
              your-email@example.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101626] p-6">
          <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
            <Phone size={25} />
          </span>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="mt-1 font-semibold">
              Add your phone number
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101626] p-6">
          <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
            <MapPin size={25} />
          </span>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="mt-1 font-semibold">
              Savar, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleContactSubmit}
        className="space-y-5 rounded-2xl border border-white/10 bg-[#101626] p-6 sm:p-8"
      >
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Your Name
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Your Email
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength={254}
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Your Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="Write your message here..."
            required
            minLength={5}
            maxLength={4000}
            rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

        {formMessage && (
          <p
            role="status"
            aria-live="polite"
            className="text-sm text-blue-300"
          >
            {formMessage}
          </p>
        )}
      </form>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-xl font-bold">
            Joy<span className="text-blue-500">.dev</span>
          </a>

        
<p className="text-sm text-gray-500">
  © 2026 Joy Gopal Dhar. All rights reserved.
</p>


          <div className="flex gap-4">
            <a
              href="https://github.com/joy1290"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website and social profiles"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}