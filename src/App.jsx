import './App.css'
import CreateNote from './components/CreateNote'
import Header from './components/Header'
import Notes from './components/Notes'
import Search from './components/Search'
import Tags from './components/Tags'

function App() {
  return (
    <main className='w-[90%] mx-auto flex flex-col gap-8 pt-16'>
      <Header />
      <Search/>
      <Tags/>
      <CreateNote/>
      <Notes/>
    </main>
  )
}

export default App
