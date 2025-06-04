"use client";

import { MouseEventHandler } from "react";

export default function Button({onClick, text, isPrimary} : {onClick : MouseEventHandler, text: string, isPrimary: boolean}) {

  let className = "rounded-md px-3 py-1.5 font-medium";

  if(isPrimary) {

  } else {

  }
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  )
}