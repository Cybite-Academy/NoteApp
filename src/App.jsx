import { useState } from 'react'
import './App.css'
import CreateNote from './components/CreateNote'
import Header from './components/Header'
import Notes from './components/Notes'
import Search from './components/Search'
import Tags from './components/Tags'

function App() {
  const [isOpenCreateNote, setIsOpenCreateNote] = useState(false);

  const noteObj = [];
  const [noteDetails, setNoteDetails] = useState(noteObj);
  console.log(noteDetails)
  return (
    <main className='w-[90%] max-w-[600px] mx-auto flex flex-col gap-8 pt-12'>
      <Header openCreate={setIsOpenCreateNote} />
      <Search />
      <Tags />
      {isOpenCreateNote && <CreateNote openCreate={setIsOpenCreateNote} setNoteDetails={setNoteDetails} noteDetails={noteDetails} />}
      <Notes noteDetails={noteDetails} />
    </main>
  )
}

export default App
