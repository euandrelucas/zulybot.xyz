/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import 'tailwindcss/tailwind.css'
import dynamic from 'next/dynamic'
// REACT/COMPONENTS
import React from "react";
import Link from "next/link";
const Navbar = dynamic(() => import('./components/Navbar'))
const Footer = dynamic(() => import('./components/Footer'))

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
                        Zuly Bot
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                        Olá! Sou a zuly, um 100% bot brasileiro focado em anime para o público otaku!
                    </p>
                    <div className="mt-12">
                        <a href="/add" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" rel="noreferrer">
                            <i className="fas fa-plus" style={{
                              color: '#ffffff'
                            }}/> Me Adicione
                        </a>
                        <a href="/discord" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-indigo-700 active:bg-indigo-600 uppercase text-sm shadow hover:shadow-lg" target="_blank" rel="noreferrer">
                            <i className="fab fa-discord" style={{
                              color: '#ffffff'
                            }}></i> Suporte
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img className="flex top-150 b-auto right-2 sm:w-3/12 w-2/12" src="/img/photo_home.png" alt="photo_home" />
    </section>
    <div className="bouncy-arrow">
        <center>
            <Link href="#funcionalidades"><i className="fas fa-chevron-down" style={{
            color: '#3065AC',
        }}></i></Link>
        </center>
    </div>
    <div className="container mx-auto px-4 pb-32">
        <h1 id="funcionalidades" className="text-3xl font-semibold">Funcionalidades</h1>
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
                        A Zuly possui uma database com +300 waifus diferentes aonde você pode casar com elas e ganhar ryos, a moeda da economia da zuly! Basta usar o comando z!waifu.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img alt="..." className="max-w-full rounded-lg shadow-xl" style={{
      transform:
        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
    }} src="/img/photo_func1.png" />
            </div>
        </div>
    </div>
    
    <div className="justify-center text-center flex flex-wrap top-150">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Outras Funcionalidades</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Além da funcionalidade principal, o sistema de waifu, a zuly também possui outros sistemas para ajudar seu servidor
            </p>
          </div>
        </div>

        <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 top-150">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Moderação
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photo_func2.png"
                      />
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Música
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photo_func3.png"
                      />
                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Sorteios
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photo_func4.png"
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <br/>
    <br/>
    <Footer />
</body>
</>
    )
}
export default Home