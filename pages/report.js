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

        <br/>
        <br/>

        <section section className="h-screen">
        <center>
        <iframe width="100%" height="500" src="//star-reports.4dg.repl.co/" frameBorder="0" allowFullScreen/>
        </center>
        </section>

        <Footer/>
        </body>
</>
    )
}
export default Home