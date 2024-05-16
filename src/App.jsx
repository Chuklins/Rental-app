<<<<<<< HEAD

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomePage from './pages/Home/index.jsx';
import PostAdsPage from './pages/PostAdsPage/index.jsx';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/index.jsx";
import PostAdsPage from "./Pages/PostAdsPage/index.jsx";
>>>>>>> eca78ee210b55f22266d9c122c088b85e1c8a33f

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/post-ads' element={<PostAdsPage />}></Route>
        <Route path='/post-ads' element={<PostAdsPage />}></Route>
=======
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/post-ads" element={<PostAdsPage />}></Route>
>>>>>>> eca78ee210b55f22266d9c122c088b85e1c8a33f
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import FirstSection from "./component/FirstSection.jsx";
// import Header from "./component/Header.jsx";
// import HeroSection from "./component/HeroSection.jsx";
// import LastSection from "./component/LastSection.jsx";
// import SecondSection from "./component/SecondSection.jsx";
// import ThirdSection from "./component/ThirdSection.jsx";

// function App() {
//   return (
//     <>
//       <Header />
//       <HeroSection />
//       <FirstSection />
//       <SecondSection />
//       <ThirdSection />
//       <LastSection />
//     </>
//   );
// }
