import React from "react";
import Link from "next/link";

// COPYRIGHT
const name = "And.";
const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-purple-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-purple-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Zuly Bot</h4>
              <h5 className="text-lg mt-0 mb-2 text-purple-600">
              Olá! Sou a zuly, um 100% bot brasileiro focado em anime para o público otaku!
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <Link href="/twitter">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                <i className="fab fa-twitter"></i>
                </button>
                </Link>
                <Link href="/discord">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-discord"></i>
                </button>
                </Link>
                <Link href="/github">
                <button
                  className="bg-white text-purple-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-purple-500 text-sm font-semibold mb-2">
                    Zuly
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-purple-600 hover:text-purple-800 font-semibold block pb-2 text-sm"
                        href="/discord"
                      >
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-purple-600 hover:text-purple-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        Sobre
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-purple-600 hover:text-purple-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-purple-500 text-sm font-semibold mb-2">
                    And. (Owner)
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-purple-600 hover:text-purple-800 font-semibold block pb-2 text-sm"
                        href="/andgithub"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-purple-600 hover:text-purple-800 font-semibold block pb-2 text-sm"
                        href="/adgdeveloper"
                      >
                        Website
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-purple-600 hover:text-purple-800 font-semibold block pb-2 text-sm"
                        href="/andtwitter"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-purple-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-purple-500 font-semibold py-1">
              And © 2021 - {year} — Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer