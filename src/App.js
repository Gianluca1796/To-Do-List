import './App.css';

import ListaDeTareas from './components/ListaDeTareas';
import logo from './img/to-do-list.png';

function App() {
  return (
    <div className="principal-container">
      <div className='logo-container'>
        <img 
          src={logo} alt='logo'
          className='logo' />
        <h1 className='title' >Lista de Tareas</h1>
      </div>
      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
