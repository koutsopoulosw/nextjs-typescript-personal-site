import { LinkData } from "../data/links";

export default function LinkButton({item} : {item : LinkData}) {
  return (
      <li key={item.label}>
        <a href={item.href} className="flex flex-row justify-center w-xs border-2 text-slate-500 border-slate-400 md:text-2xl lg:text-l mt-4 mb-4 transition duration-200 hover:border-slate-700 hover:text-slate-900 hover:bg-stone-200 focus-visible:border-slate-700 focus-visible:text-slate-900 focus-visible:bg-stone-200">
          {item.label}
        </a>
      </li>
  )
}