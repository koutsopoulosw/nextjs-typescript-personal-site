import Link from 'next/link'
import { LinkData, exampleLinks } from "../data/links";
import LinkButton from '../ui/linkButton';

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const exampleList = exampleLinks.map(item => 
    <LinkButton item={item}/>
  );

  return (
    <div className="flex flex-row justify-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-700 bg-stone-100">
      <section className="flex flex-col gap-8 lg:w-5xl justify-between">
        <main className="flex flex-col">
          {children}
        </main>
      </section>
      <nav className="sticky top-0 h-screen flex flex-col justify-around">
        <ul>
          {exampleList}
        </ul>
      </nav>
    </div>
  )
}