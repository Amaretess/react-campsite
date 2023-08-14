import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routesConfig } from './data/routesConfig';


const App = () => <RouterProvider router={routesConfig}/>


export default App;