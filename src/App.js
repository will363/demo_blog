import './App.css';
import Footer from './components/Footer/Footer';
import Topbar from './components/Topbar/Topbar';
import Home from './scenes/Home/Home';

function App() {
  return (
    <div>
      <Topbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
