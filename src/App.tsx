import './App.css'
import NavMenu from './atoms/NavMenu';
import Bienvenido  from './atoms/Bienvenido';
function App() {

  return (
    <>
        <main className='flex flex-col py-40'>
          <NavMenu />
          <Bienvenido/>
        </main>
    </>
  )
}

export default App
