
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomePage from './pages/Home/index.jsx';
import PostAdsPage from './pages/PostAdsPage/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/post-ads' element={<PostAdsPage />}></Route>
        <Route path='/post-ads' element={<PostAdsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
