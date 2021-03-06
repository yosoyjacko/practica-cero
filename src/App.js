import { Provider } from 'react-redux'
import EquipoSeleccionado from './component/EquipoSeleccionado';
import Jugadores from './component/Jugadores';
import store from './store';
import Style from './styles/styles.scss'

const App = () => (
  <Provider store={store}>
    <main>
      <h1>For Honor Futbolito</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
