import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Explore from "./pages/Explore";
import { useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200);

    //eslint-disable-next-line
  }, [])
  
  return (
    <>
      {loading ? 

      <div className="min-h-screen flex justify-center flex-col items-center w-full bg-set">
        <img className="my-3" src={require('./images/giphy.gif')} alt="" />
        <h1 className="bg-red-700 text-white lg:w-1/4 py-3 px-5 lg:py-3 text-center rounded text-2xl md:text-3xl lg:text-4xl font-fam-roboto"><span className="uppercase font-bold">Reponews</span><br />Loading...</h1>
      </div>

    :
    
    <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/news"
              element={<News category="general" country="in" />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/business"
              element={<News category="business" country="in" />}
            />
            <Route
              path="/technology"
              element={<News category="technology" country="in" />}
            />
            <Route
              path="/science"
              element={<News category="science" country="in" />}
            />
            <Route
              path="/sports"
              element={<News category="sports" country="in" />}
            />
            <Route
              path="/health"
              element={<News category="health" country="in" />}
            />
            <Route
              path="/entertainment"
              element={<News category="entertainment" country="in" />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    }
    </>
  );
}

export default App;
