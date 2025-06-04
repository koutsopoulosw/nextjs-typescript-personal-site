"use client";

import Button from './button';
import {ChangeEvent, useState} from 'react';
import TextBox from './textbox';
import ListItem from './listItem';
import NextNodeServer from 'next/dist/server/next-server';

interface Note {
  noteName: string
  noteContent: string
  noteId: number
}

export default function noteTakingApplet() {
  
  const [notes, setNotes] = useState<Note[]>([]);

  // currentNoteId will be null if not currently editing one
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [noteContent, setNoteContent] = useState("");
  const [noteName, setNoteName] = useState("");

  console.log("NOTES");
  console.log(notes);

  const updateNoteName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value);
  };

  const updateNoteContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteContent(e.target.value);
  };

  const onSubmit = () => {
    
    let nextNotes;
    
    // If editing note currently
    if(currentNoteId) {
      nextNotes = notes.map((note : any) => {
        if (note.noteId == currentNoteId) {
          return {
            noteName,
            noteContent,
            currentNoteId
          }
        } else {
          return note;
        }
      });
    } else {
      nextNotes = [...notes, {
        noteName,
        noteContent,
        noteId: notes.length
      }]
    }

    console.log("NEW NOTES");
    console.log(nextNotes);
    setNotes(nextNotes);
  };
  
  const onCancel = () => {
    setCurrentNoteId(null);
    setNoteName("");
    setNoteContent("");
  };

  notes.map((note : any) => (
    <li key={note.id}>{note.name}</li>
  ));

  return (
    <section className="flex flex-row justify-center mb-8">
      <form className="flex flex-col justify-center">
        <label>Note Name</label>
        <TextBox name="Note Name" text={noteName} setText={updateNoteName}/>
        <label>Note Contents</label>
        <TextBox name="Note Contents" text={noteContent} setText={updateNoteContent}/>
        {currentNoteId ? (
          <Button onClick={onCancel} text={'Submit'} isPrimary={true}/>
        ) : null}
        <Button onClick={onSubmit} text={'Submit'} isPrimary={true}/>
      </form>
      <div className="flex flex-col">
        <ul>

        </ul>
      </div>
    </section>
  );
}