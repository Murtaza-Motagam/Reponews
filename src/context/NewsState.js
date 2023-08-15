import React, { useState } from 'react'
import NewsContext from './NewsContext'

const NewsState = (props) => {

    const [data, setData] = useState([])

    const fetchNews = async () => {
      const host = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cc1cbcf82bb94ce0a26c313d6e273977";
      const response = await fetch(host);
      const json = await response.json();
      setData(json.articles)
    }
    
    return (
        <NewsContext.Provider value={{ data, fetchNews}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;
