import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';


const News = (props) => {

  const location = useLocation();

  // Api Calling

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const pageSize = 6;

  const fetchNews = async () => {
    const host = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc1cbcf82bb94ce0a26c313d6e273977&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(host);
    const json = await response.json();
    setNews(json.articles)
  }

  const fetchMore = async () => {
    setLoading(true)
    setPage(page + 1);
    const host = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc1cbcf82bb94ce0a26c313d6e273977&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(host);
    const json = await response.json();
    setNews(json.articles)
    setLoading(false)
  }

  const fetchPrev = async () => {
    setPage(page - 1);
    setLoading(true)
    const host = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc1cbcf82bb94ce0a26c313d6e273977&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(host);
    const json = await response.json();
    setNews(json.articles)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchNews();
    setLoading(false)

    //eslint-disable-next-line
  }, [])


  const Loading = () => {
    return (
      <div className="h-64 flex justify-center items-center">
        <ClipLoader
          color="#a03131"
          size={90}
        />
      </div>
    )
  }


  const ShowNews = () => {
    return (
      <div>
        <header className="text-gray-900 text-md ">
          <div className="container bs-1 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:mt-3 rounded">
            <nav className=" md:mr-auto md:ml-4  md:py-1 md:pl-4  md:border-gray-400	flex flex-wrap items-center text-base justify-center font-fam-roboto ">
              <Link to="/news" className={`mr-5 text-center ${location.pathname === "/news" ? "font-bold text-lg" : ""} hover:text-gray-600`}>General</Link>
              <Link to="/business" className={`mr-5 text-center ${location.pathname === "/business" ? "font-bold text-lg" : ""} hover:text-gray-600`}>Business</Link>
              <Link to="/science" className={`mr-5 text-center ${location.pathname === "/science" ? "font-bold text-lg" : ""} hover:text-gray-600`}>Science</Link>
              <Link to="/sports" className={`mr-5 text-center ${location.pathname === "/sports" ? "font-bold text-lg" : ""} hover:text-gray-600`}>Sports</Link>
              <Link to="/technology" className={`mr-5 text-center ${location.pathname === "/technology" ? "font-bold text-lg" : ""} hover:text-gray-600`}>Technology</Link>
              <Link to="/health" className={`mr-5 text-center ${location.pathname === "/health" ? "font-bold text-lg" : ""} hover:text-gray-600`}>Health</Link>
              <Link to="/entertainment" className={`mr-5 text-center ${location.pathname === "/entertainment" ? "font-bold text-lg" : ""} hover:text-gray-600`}>Entertainment</Link>
            </nav>
          </div>
        </header>

        {/* Main News Contaienr */}

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {news.map((d, index) => {
              return (
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 relative" key={index}>
                  <span className="topbar font-fam-poppins font-bold bg-red-100 text-red-800 text-md mr-2 px-3 py-0.5  dark:bg-red-900 dark:text-red-300">{d.source.name}</span>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={!d.urlToImage ? "https://ktla.com/wp-content/uploads/sites/4/2023/07/64afe10ab31dd2.13489516.jpeg?w=1280" : d.urlToImage} />
                  </div>
                  <h2 className="text-lg font-fam-roboto text-gray-900 mt-5">{!d.title ? "More than $1.5 billion is up for grabs as lottery jackpots increase - KTLA Los Angeles" : d.title}</h2>
                  <p className="text-base text-sm font-fam-poppins leading-relaxed mt-2">{!d.description ? "More than $1.5 billion is up for grabs as jackpots for three California Lottery draw games continue to increase heading into the weekend. The Mega Millions jackpot is an estimated $560 million, the Powerball jackpot is $875 million and the Super Lotto jackpot…" : d.description}</p>
                  <Link to={d.url} target="__blank" className="text-indigo-500 font-fam-roboto hover:font-bold inline-flex items-center mt-3">Visit Article
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {loading ? <Loading /> : <ShowNews />}
      <div className="container px-5 py-24 mx-auto">
        <div className="previous-and-right mt-6">
          <div className="flex justify-between font-fam-poppins">
            <button onClick={fetchPrev} className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-900 rounded">
              <i className="mr-2 fa-solid fa-arrow-left fa-lg" style={{ color: "#ffffff" }}></i>
              Previous
            </button>

            <button onClick={fetchMore} className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-900 rounded">
              Next
              <i className="ml-2 fa-solid fa-arrow-right fa-lg" style={{ color: "#ffffff" }}></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )



}

export default News
