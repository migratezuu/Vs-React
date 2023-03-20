import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

import Main from "./pages/Main";
import JejuAPI from "./apis/JejuAPI"
import Error from "./pages/Error";
import JejuList  from "./components/JejuList";
import Jeju from "./pages/Jeju";
import JejuDetails from "./pages/JejuDetails";
import JejuSearchResult from "./pages/JejuSearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {/* <Route index element={<JejuList />} /> */}
          <Route path = "jeju">
            <Route index element = {<Jeju/>}/>
            <Route path=":name" element={<JejuDetails/>}/>
            {/* <Route path="search/" element={<JejuSearchResult/>}/> */}
          </Route>
        </Route>
        <Route path = "*" element = { <Error/>}/>
      </Routes>.
    </BrowserRouter>
  );
}

export default App;
