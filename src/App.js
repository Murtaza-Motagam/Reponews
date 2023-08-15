import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Trending from './pages/Trending'
import Contact from './pages/Contact'
import News from './pages/News'
import Explore from './pages/Explore';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route>
              <Route  exact path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/news" element={<News category="general" country="in"/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/business" element={<News category="business" country="in"/>} />
              <Route path="/technology" element={<News category="technology" country="in"/>} />
              <Route path="/science" element={<News category="science" country="in"/>} />
              <Route path="/sports" element={<News category="sports" country="in"/>} />
              <Route path="/health" element={<News category="health" country="in"/>} />
              <Route path="/entertainment" element={<News category="entertainment" country="in"/>} />
            </Route>
          </Routes>
        </div >
        <Footer />
      </Router >
    </>
  );
}

export default App;
