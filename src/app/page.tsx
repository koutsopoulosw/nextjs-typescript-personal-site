import Image from "next/image";
import { Linkedin } from 'lucide-react';
import Resume from "./ui/resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-start min-h-screen gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-4 justify-start w-full">
        <h1 className="text-4x1 md:text-5xl lg:text-6xl font-extrabold leading-none pb-6">Alex Koutsopoulos</h1>
        <h2 className="text-2x1 md:text-3xl lg:text-4xl pb-2">Full Stack Engineer</h2>
        <h3 className="text-l md:text-xl lg:text-2xl text-slate-400 ml-8">Also known as Willard</h3>
      </header>
      <section className="flex flex-row gap-8 w-full justify-between">
        <main className="flex flex-col flex-4 gap-4 ml-12 items-center sm:items-start justify-self-start">          
          <Resume />
        </main>
        <footer className="flex flex-col flex-1 gap-12 flex-wrap items-end justify-center justify-self-end">
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
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </section>
    </div>
  );
}
