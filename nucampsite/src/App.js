import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage';


const App = () => {
  return (
      <div className="App">
        <Header/>
        <CampsiteDirectoryPage />
        <Footer />
      </div>
  )
}

export default App;