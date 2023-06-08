import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfilePage from './pages/profile';
import PopularityPage from './pages/community/popularity';
import LatestPage from './pages/community/latest';

function App(): React.ReactElement {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/community/popularity' element={<PopularityPage />} />
        <Route path='/community/latest' element={<LatestPage />} />
        <Route path='/profile' element={<MyProfilePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
