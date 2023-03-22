
import './App.css';
import Banner from './componentes/Banner/Banner.js';
import CampoTexto from './componentes/Banner/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
    </div>
    
  );
}

export default App;
