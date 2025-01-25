import CabecalhoExport from './components/Cabecalho'
import HeroExport from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  return (
    <>

      <CabecalhoExport />
    <HeroExport />
      <div className="container">
        <ListaVagas  />
      </div>
    </>
  )
}

export default App
