import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/index.jsx";
import PostAdsPage from "./Pages/PostAdsPage/index.jsx";

function App() {
  return (
    <BroswerRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/post-ads" element={<PostAdsPage />}></Route>
      </Routes>
    </BroswerRouter>
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
