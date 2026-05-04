import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AIAssistant from './components/ui/AIAssistant';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <AIAssistant />
      <Footer />
    </div>
  );
}

export default App;
