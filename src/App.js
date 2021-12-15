// import logo from './logo.svg';
import User from './components/User';
import Navigation from './components/Navigation';
import SkillDetails from './components/SkillDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <User />
      <SkillDetails />
    </div>
  );
}

export default App;
