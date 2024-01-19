import logo from './logo.svg';
import './App.css';

//import react dependencies
import React, {useState} from 'react'

//import the Slate Editor Factory
import {createEditor} from 'slate'

//Import the Slate components and React Plugin
import {Slate, Editable, withReact} from 'slate-react'

// TypeScript users
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'
/////////////////////////////////////////////////////////////////
//Constants
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]


//Main App
const App = () => {
  const [editor] = useState(() => withReact(createEditor()))
  return (
    // Add the editable component inside the context.
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  )
}


export default App;
