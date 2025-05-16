import Image from "next/image";
import { Linkedin } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-row justify-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-700 bg-stone-100">
      <section className="flex flex-col gap-8 lg:w-5xl justify-between">
        <header className="justify-start mb-4">
          <h1 className="text-3x1 md:text-4xl lg:text-5xl font-extrabold leading-none pb-6">List App</h1>
        </header>
        <main className="flex flex-col">
          <div className="pb-8">
            <p>
              List App!
            </p>
          </div>
        </main>
      </section>
    </div>
  );
}
