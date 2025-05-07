import Image from "next/image";
import { Linkedin } from 'lucide-react';
import Resume from "./ui/resume";
import NavBar from "./ui/navBar";

export default function Home() {
  return (
    <div className="flex flex-row justify-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-700 bg-stone-100">
      <section className="flex flex-col gap-8 lg:w-5xl justify-between">
        <header className="justify-start mb-4">
          <h1 className="text-3x1 md:text-4xl lg:text-5xl font-extrabold leading-none pb-6">Alex Koutsopoulos</h1>
          <h2 className="text-2x1 md:text-3xl lg:text-4xl pb-2">Full Stack Engineer</h2>
          <p className="text-l md:text-xl lg:text-2xl text-slate-400">Full Stack Software Engineer with 6 years of experience building just about anything at some point</p>
        </header>
        <main className="flex flex-col">
          <div className="pb-8">
            <p>
              I'm a Full Stack Software Engineer who's passionate about building responsive Frontends and innovative Backends using the latest technology and frameworks.
              Most of my experience has utilized React, Node.js, and Serverless AWS, but I've also quickly picked up and used many technologies as required. I love learning, 
              whether it's about the newest frameworks, Japanese, or Physics and other similar topics!
            </p>
            <p>
              I'm currently unemployed, just having come back from living in Tokyo studying Japanese full time. It was an amazing experience, and I was able to pass my JLPT N2
              Japanese Language Certification as a result of my studies! I'm excited to look for my next opportunity though and hope to find someplace where I can learn and grow.
            </p>
            <p>
              Culturally I try to focus on good communication, honesty, and taking ownership for my work. I tend to think I'm a pretty relaxed guy who's easy to work with, and who
              can get along with just about anyone. When I'm not coding or studying Japanese, I love Anime, Video Games and playing piano. Feel free to look at my work experience,
              and if you think there's a match, or just want to chat, don't hesitate to reach out. : ) 
            </p>
          </div>
          <Resume />
        </main>
      </section>
      <nav className="sticky top-0 h-screen flex flex-col justify-around">
          <NavBar />
          <footer className="flex flex-col gap-12 flex-wrap items-end justify-center justify-self-end max-w-xs mr-4">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/github.png"
                alt="Github icon"
                width={16}
                height={16}
              />
              Github
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/linkedin.png"
                alt="LinkedIn icon"
                width={16}
                height={16}
              />
              LinkedIn
            </a>
          </footer>
        </nav>
    </div>
  );
}
