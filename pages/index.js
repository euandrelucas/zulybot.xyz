/* eslint-disable @next/next/no-img-element */
import 'tailwindcss/tailwind.css'
import dynamic from 'next/dynamic'
// REACT/COMPONENTS
import React from "react";
const Navbar = dynamic(() => import('./components/Navbar'))
const Footer = dynamic(() => import('./components/Footer'))
// FONTAWESOME
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
    return (
<>
    <body className="text-center text-white" style={{
            backgroundColor: '#ffcbdb'
        }}>
        <Navbar/>
        <section section className="header pt-16 items-center flex h-screen max-h-860-px">
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                    <div className="pt-32 sm:pt-0">
                        <h2 className="font-semibold text-4xl text-blueGray-600">
                            Zuly Bot
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                            Olá! Sou a zuly, um 100% bot brasileiro focado em anime para o público otaku!
                        </p>
                        <div className="mt-12">
                            <a href="/add" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" rel="noreferrer">
                            <FontAwesomeIcon icon={faPlus} /> Me Adicione
                            </a>
                            <a href="/discord" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-indigo-700 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg" target="_blank" rel="noreferrer">
                            <i className="fab fa-discord"></i> Servidor de Suporte
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <img
          className="absolute top-100 b-auto right-2 sm:w-3/12 w-2/12"
          src="/img/photo_home.png"
          alt="photo_home"
        />
        </section>
        <Footer/>
        </body>
</>
    )
}
export default Home