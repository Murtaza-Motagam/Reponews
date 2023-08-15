import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Explore = () => {

    const [news, setNews] = useState([])
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1);
    const pageSize = 6;

    const fetchNews = async (e) => {
        e.preventDefault();
        console.log("query: " + query)
        const host = `https://newsapi.org/v2/top-headlines?country=${query}&category=general&apiKey=cc1cbcf82bb94ce0a26c313d6e273977&page=${page}&pageSize=${pageSize}`;
        const response = await fetch(host);
        const json = await response.json();
        setNews(json.articles)
        document.getElementById("d-block").style.display = "block";
    }


    const fetchMore = async () => {
        setPage(page + 1);
        const host = `https://newsapi.org/v2/top-headlines?country=${query}&category=general&apiKey=cc1cbcf82bb94ce0a26c313d6e273977&page=${page}&pageSize=${pageSize}`;
        const response = await fetch(host);
        const json = await response.json();
        setNews(json.articles)
    }

    const fetchPrev = async () => {
        setPage(page - 1);
        const host = `https://newsapi.org/v2/top-headlines?country=${query}&category=general&apiKey=cc1cbcf82bb94ce0a26c313d6e273977&page=${page}&pageSize=${pageSize}`;
        const response = await fetch(host);
        const json = await response.json();
        setNews(json.articles)
    }



    return (
        <div>

            {/* Search Component */}

            <div className="flex items-center justify-center px-10 py-10 bg-gray-200">
                <form className="w-full sm:w-96 mx-4 flex font-fam-roboto" onSubmit={fetchNews}>
                    <input
                        type="text"
                        className="flex-grow px-4 py-2  rounded-l-full border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
                        placeholder="Search your country here"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}

                    />
                    <button
                        className="px-6 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 hover:font-bold focus:outline-none"
                        type='submit'
                    >
                        Search
                    </button>
                </form>
            </div>


            {/* NewsItem Component */}

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

            <div className="container mx-auto py-4 d-none" id="d-block">

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


        </div>
    )
}


export default Explore
