import React, { useContext, useEffect, useState } from 'react'
import NewsContext from '../context/NewsContext'
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Trending = () => {

  const context = useContext(NewsContext);
  const { data, fetchNews } = context;
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetchNews();
    setLoading(false);

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


  const ShowTrending = () => {

    return (
      <div>
        <section className="text-gray-600 body-font">
          {
            data.map((d) => {
              return (
                <section className="text-gray-600 body-font overflow-hidden" key={d.url}>
                  <div className="container px-5 py-12 mx-auto font-fam-roboto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-32 object-cover object-center rounded" src={!d.urlToImage ? "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/chandrayaan-3-live-012346-16x9_0.jpg?VersionId=MLQcqNMwUPAwdi_bM0oTy0D5u7kupVX4" : d.urlToImage} />
                      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div className="flex items-center justify-between">
                          <h2 className="lg:text-xl md:text-lg text-sm italic font-bold text-red-500 ">{d.source.name}</h2>
                          <h2 className="lg:text-md md:text-md sm:text-sm  text-indigo-500 ">Author -  <span className='font-bold'>{d.author}</span></h2>
                        </div>
                        <h1 className="text-gray-900 font-fam-poppins text-2xl mb-1">{d.title}..</h1>

                        <p className="leading-relaxed">{d.description}..</p>

                        <p className='mt-4 text-red-800'>Published At: <span className="font-bold">{d.publishedAt}</span></p>

                        <div className="flex py-4 items-center">
                          <Link to={d.url} className="flex items-center mr-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded">Visit Article
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>

                          <button className="mr-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                          </button>
                          Like the post
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </section>
      </div>
    )

  }

  return (
    <>
      {loading ? <Loading /> : <ShowTrending />}
    </>
  )
}

export default Trending
