/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

import { faHome, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center bg-pink-400 p-2'>
          <a href="/" className='border-transparent shadow-none bg-pink-400 rounded-lg p-2'>
            <img className="sm:w-10 w-10 border-none rounded-lg" src="/favicon.ico" alt="photo_home" />
          </a>
          <button
          className=' inline-flex p-3 hover:bg-pink-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}>
                      <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-600 hover:text-white '>
              <FontAwesomeIcon icon={faHome} /> Começo
              </a>
            </Link>
            <Link href='/discord'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              <i className="fab fa-discord"></i> Discord
              </a>
            </Link>
            <Link href='/report'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              <i className="fas fa-bug"></i> Report
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              <FontAwesomeIcon icon={faPaintBrush} /> Fan-arts
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar