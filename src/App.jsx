import './App.css'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (
    <main className='w-[90%] mx-auto flex flex-col gap-8 pt-16'>
      <Header />
      <Search/>
    </main>
  )
}

export default App
