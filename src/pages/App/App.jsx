import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import WellnessPage from '../WellnessPage/WellnessPage';
import NavBar from '../../components/NavBar/NavBar';
import RecipePage from '../RecipePage/RecipePage'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/recipes" element={<RecipePage />} />
          </Routes>
        </>
        :
          <AuthPage setUser={setUser} />
      }
      </main>
  );
}

export default App;