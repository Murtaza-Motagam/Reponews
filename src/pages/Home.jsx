import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="container-2xl mx-auto bg-gray-200 font-fam-roboto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5  py-16  md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-6 mb-16 md:mb-0 items-center text-center">
              <h1 className="font-600 sm:text-4xl text-3xl mb-4 font-medium text-gray-800">Get the Trending
                <br className="hidden lg:inline-block" />News from World Wide
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">

                <Link to="/news" className="inline-flex font-fam-roboto text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded  font-bold sm:text-sm lg:text-lg">Watch News</Link>

                <Link to="/trending" className="bg-transparent ml-4 font-fam-roboto  hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2  px-4 border border-red-700 hover:border-transparent rounded">
                Visit Trending Headlines
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src={require('../images/hero-1.jpeg')} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
