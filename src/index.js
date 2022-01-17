import {render} from 'react-dom'
import { Provider } from 'react-redux';
import store from './Redux/Store/store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

render(<Provider store={store}><App/></Provider>,document.getElementById('root'));