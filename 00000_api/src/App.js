import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Jeju from './pages/Jeju';
import JejuDetails from './pages/JejuDetails';
import JejuSearchResult from './pages/JejuSearchResult';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="Jeju">
          <Route index element={<Jeju/>}/>
          <Route path=":name" element={<JejuDetails/>}/>
          <Route path="search/" element={<JejuSearchResult/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
