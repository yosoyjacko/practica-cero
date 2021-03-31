import { Provider } from 'react-redux'
import EquipoSeleccionado from './component/EquipoSeleccionado';
import Jugadores from './component/Jugadores';
import store from './store';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>EDmanager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
