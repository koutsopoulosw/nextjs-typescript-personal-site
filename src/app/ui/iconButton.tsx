"use client";

import { Children, MouseEventHandler, ReactNode } from "react";

export default function IconButton({onClick, children} : {onClick : MouseEventHandler, children : ReactNode}) {

  let className = "rounded-md px-3 py-1.5 font-medium hover:border-slate-700 hover:text-slate-900 hover:bg-stone-200 ";

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}