"use client";

import { MouseEventHandler } from "react";

export default function Button({onClick, text, isPrimary} : {onClick : MouseEventHandler, text: string, isPrimary: boolean}) {

  let className = "rounded-md px-3 py-1.5 font-medium hover:border-slate-700 hover:text-slate-900 hover:bg-stone-200 ";

  if(isPrimary) {
    className += "text-slate-50 bg-stone-500";
  } else {
    className += "text-slate-500";
  }
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  )
}