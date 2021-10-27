/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import 'tailwindcss/tailwind.css'
import dynamic from 'next/dynamic'
// REACT/COMPONENTS
import React from "react";
import Link from "next/link";
const Navbar = dynamic(() => import('../components/Navbar'))
const Footer = dynamic(() => import('../components/Footer'))

function Home() {
    return (
<>

  <body className="text-center text-white" style={{
    backgroundColor: '#ffcbdb'
  }}>
    <Navbar />
    <section section className="header pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="pt-32 sm:pt-0">
                    <h2 className="font-semibold text-4xl text-blueGray-600">
                        Zuly
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                        Hi! I am Zuly, a 100% Brazilian Bot focused on anime for the Otaku public!
                    </p>
                    <div className="mt-12">
                        <a href="/add" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" rel="noreferrer">
                            <i className="fas fa-plus" style={{
                              color: '#ffffff'
                            }}/> Add me
                        </a>
                        <a href="/discord" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-indigo-700 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg" target="_blank" rel="noreferrer">
                            <i className="fab fa-discord" style={{
                              color: '#ffffff'
                            }}></i> Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img className="flex top-100 b-auto right-2 sm:w-3/12 w-2/12" src="/img/photo_home.webp" alt="photo_home" />
    </section>
    <div className="container mx-auto px-4 pb-32">
        <h1 id="funcionalidades" className="text-3xl font-semibold">Functionalities</h1>
        <br />
        <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                        <i className="fas fa-ring"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">
                        Waifus
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                        Zuly has a Database with +300 different Waifus where you can marry them and win Ryos, Zuly economy currency! Just use the command /waifu.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img alt="..." className="max-w-full rounded-lg shadow-xl" style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }} src="/img/photo_waifu.png"/>
            </div>
        </div>
    </div>
    
    <div className="justify-center text-center flex flex-wrap top-150">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Other features</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            In addition to the main functionality, the Waifu system, Zuly also has other systems to help & amuse your server            </p>
          </div>
        </div>
        <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 top-150">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  <i className="fas fa-ban" style={{
                    color: '#C9B5D4'
                  }}></i> Moderation
                  </h5>
                    <div className="absolute thumbnail hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photo_baninfo.png"
                      />
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  <i className="fas fa-music" style={{
                    color: '#C9B5D4'
                  }}></i> Music
                  </h5>
                    <div className="absolute thumbnail hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photo_music.png"
                      />
                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  <i className="fas fa-democrat" style={{
                    color: '#C9B5D4'
                  }}></i> Fun
                  </h5>
                    <div className="absolute thumbnail hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photo_fun.png"
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
</body>
</>
    )
}
export default Home