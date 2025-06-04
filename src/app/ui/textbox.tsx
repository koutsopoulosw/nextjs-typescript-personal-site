'use client';

import { ChangeEventHandler } from "react";

export default function TextBox({text, setText, name} :{text : string, setText: ChangeEventHandler, name: string}) {

  return (
    <div className="mb-4">
      <input type="text" value={text} onChange={setText} />
    </div>
  )
}