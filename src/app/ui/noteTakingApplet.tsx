"use client";

import Button from './button';
import {ChangeEvent, useState} from 'react';
import TextBox from './textbox';
import ListItem from './listItem';
import NextNodeServer from 'next/dist/server/next-server';
import { Pencil, Trash2 } from 'lucide-react';
import IconButton from './iconButton';

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

  const updateNoteName = (e: ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value);
  };

  const updateNoteContent = (e: ChangeEvent<HTMLInputElement>) => {
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
    console.log(JSON.stringify(nextNotes));
    setNotes(nextNotes);
    onCancel();
  };
  
  const onCancel = () => {
    setCurrentNoteId(null);
    setNoteName("");
    setNoteContent("");
  };

  const onEdit = () => {

  };

  const onDelete = () => {

  };


  const notesList = notes.map((note : any) => (
    <li key={note.noteId} className='flex flex-row justify-between mb-6'>
      <div className='flex flex-col'>
        <h4 className='text-lg'>{note.noteName}</h4>
        <div className='text-m'>{note.noteContent}</div>
      </div>
      <div className='flex flex-col'>
        <IconButton onClick={onEdit}><Pencil /></IconButton>
        <IconButton onClick={onDelete}><Trash2 /></IconButton>
      </div>
    </li>
  ));

  return (
    <section className="flex flex-row justify-center mb-8">
      <div className="flex flex-col justify-center">
        <label>Note Name</label>
        <TextBox name="Note Name" text={noteName} setText={updateNoteName}/>
        <label>Note Contents</label>
        <TextBox name="Note Contents" text={noteContent} setText={updateNoteContent}/>
        {currentNoteId ? (
          <Button onClick={onCancel} text={'Submit'} isPrimary={true}/>
        ) : null}
        <Button onClick={onSubmit} text={'Submit'} isPrimary={true}/>
      </div>
      <div className="flex flex-col">
        <ul>
          {notesList}
        </ul>
      </div>
    </section>
  );
}