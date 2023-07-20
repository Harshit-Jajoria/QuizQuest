import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { BACKEND_URL } from '../constants';

const Home = () => {
  const cardItems = [
    {
      id: 1,
      text: 'html',
      imgSrc: '/assets/html.png'
    },
    {
      id: 2,
      text: 'css',
      imgSrc: '/assets/css.png'
    },
    {
      id: 3,
      text: 'javascript',
      imgSrc: '/assets/javascript.png'
    },
    {
      id: 4,
      text: 'react',
      imgSrc: '/assets/react.png'
    },
    {
      id: 5,
      text: 'nodejs',
      imgSrc: '/assets/node.png'
    },
    {
      id: 6,
      text: 'nextjs',
      imgSrc: '/assets/nextjs.png'
    },
  ];

  const handleClick =async (item) => {
    console.log(item);
    try {
      const res = await axios.get(`${BACKEND_URL}/questions/html`)
      console.log(res.data);
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <>
    <Navbar/>
    <div className='bg-black'>
      <div className="upperHero h-2/5 py-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white text-center whitespace-nowrap mb-2">
          QuizzApp: Empowering Coders to Conquer JavaScript, HTML, CSS, and
        </h1>
        <h1 className="text-2xl text-white text-center whitespace-nowrap">
          Beyond - Unleash Your Knowledge, Embrace the Challenge!
        </h1>
      </div>

      <div className='card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer'>
        {cardItems.map((item) => (
          <div onClick={() => handleClick(item)} key={item.id} className="ml-12 mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-col justify-center">
            <div>
              <img className="rounded-t-lg" src={item.imgSrc} alt={item.text} />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.text.toUpperCase()}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
