import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Trending from './pages/trending';
import Songs from './pages/songs';
import Movies from './pages/movies';
import Liked from './pages/likedvideos';



function App() {
  return (
    <div className="flex h-screen">
      
      <Navbar />


      <div className='flex-1 p-6 text-gray-600 bg-white text-lg overflow-y-auto '>     
        
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/likedvideos' element={<Liked />} />
        </Routes>
      </div>
    
    
    
    </div>

  );
}

export default App;
