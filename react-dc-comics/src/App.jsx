import { useState } from 'react'
import AppHeader from './components/AppHeader'
import AppMain
  from './components/AppMain'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppMain />

      <footer></footer>
    </>
  )
}

export default App
