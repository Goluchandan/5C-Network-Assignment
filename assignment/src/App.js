import './App.css';
import GitHub from './Components/GitHub';
import { Route, Routes } from 'react-router-dom';
import RepoDetails from './Components/RepoDetails';
import FolowersName from './Components/FolowersName';
import Folowers from './Components/FolowersRepo';

function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<GitHub />} />
           <Route path="/:id" element={<RepoDetails/>} />
           <Route path="/folowers:id" element={<FolowersName />} />
           <Route path="/folowerRepo:id" element={<Folowers />} />

        </Routes>
    </div>
  );
}

export default App;
