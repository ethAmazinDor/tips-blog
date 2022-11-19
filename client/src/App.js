import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './pages/Dashboard'
import Posts from './pages/Posts';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='posts' element={<Posts />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
