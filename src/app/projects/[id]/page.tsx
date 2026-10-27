
"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Lightbulb,
  Wrench,
} from "lucide-react";

const projects = [
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    category: "Price Tracking Web Application",
    description:
      "Bazar Dor is a Bengali-language web application that helps people in Bangladesh explore daily prices of essential products and compare market prices.",
    image: "🛒",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Better Auth",
      "MongoDB",
    ],
    live: "https://bazardor-teal.vercel.app/",
    github: "https://github.com/joy1290/bazardor",
    challenges: [
      "Fetching product information from an external API.",
      "Handling API errors and loading states.",
      "Building reusable product cards and category pages.",
      "Making the interface responsive on different screen sizes.",
    ],
    improvements: [
      "Add product price history charts.",
      "Improve API error handling and loading feedback.",
      "Add more product categories and market information.",
      "Improve accessibility and mobile usability.",
    ],
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
    challenges: [
      "Managing the available coin balance.",
      "Handling player selection and duplicate selections.",
      "Displaying notifications for successful or unsuccessful actions.",
      "Creating reusable and responsive player cards.",
    ],
    improvements: [
      "Add a dedicated player search feature.",
      "Add filters for player roles and teams.",
      "Improve team management features.",
      "Add more detailed player statistics.",
    ],
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
    challenges: [
      "Database & Auth Integration.",
      "Handling sign-in and sign-up flows.",
      "Managing user sessions and profile information.",
      "Error Handling & Debugging.",
    ],
    improvements: [
      "Enhanced Validation & Feedback.",
      "Advanced Security.",
      "Robust Profile Management.",
      "Add more automated testing.",
    ],
  },
];

function ProjectDetailsContent() {
  const params = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#080b14] px-6 text-center text-white">
        <h1 className="text-3xl font-bold">Project Not Found</h1>

        <p className="mt-3 text-gray-400">
          The requested project could not be found.
        </p>

        <Link
          href="/#projects"
          className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080b14] px-5 py-12 text-white sm:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#101626]">
          <div className="flex min-h-56 items-center justify-center bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-purple-600/20 py-10 sm:min-h-72">
            <span
              className="text-8xl sm:text-9xl"
              role="img"
              aria-label={project.title}
            >
              {project.image}
            </span>
          </div>

          <div className="p-6 sm:p-10 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              {project.category}
            </p>

            <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
                >
                  Live Demo
                  <ExternalLink size={18} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
                >
                  <FaGithub size={19} />
                  GitHub Repository
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>

            <section className="mt-12">
              <h2 className="flex items-center gap-3 text-xl font-bold sm:text-2xl">
                <Code2 className="text-blue-400" size={24} />
                Technologies Used
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-white/10 bg-[#080b14]/70 p-6">
                <h2 className="flex items-center gap-3 text-xl font-bold">
                  <Wrench className="text-orange-400" size={22} />
                  Challenges
                </h2>

                <ul className="mt-5 list-inside list-disc space-y-3 text-sm leading-7 text-gray-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-white/10 bg-[#080b14]/70 p-6">
                <h2 className="flex items-center gap-3 text-xl font-bold">
                  <Lightbulb className="text-yellow-400" size={22} />
                  Future Improvements
                </h2>

                <ul className="mt-5 list-inside list-disc space-y-3 text-sm leading-7 text-gray-300">
                  {project.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
              >
                <ArrowLeft size={18} />
                Explore More Projects
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default function ProjectDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#080b14] text-white">
          <p className="text-lg text-gray-400">
            Loading project details...
          </p>
        </main>
      }
    >
      <ProjectDetailsContent />
    </Suspense>
  );
}
