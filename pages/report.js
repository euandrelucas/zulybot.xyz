/* eslint-disable @next/next/no-img-element */
import 'tailwindcss/tailwind.css'
import dynamic from 'next/dynamic'
// REACT/COMPONENTS
import React from "react";
import Script from 'next/script'
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

        <section section className="header items-center h-screen max-h-860-px">
            
        <iframe src="https://star-reports.4dg.repl.co/" height="600" width="1200">About</iframe>

        </section>

        <Footer/>
        </body>
</>
    )
}
export default Home