// CSS FILES
import '../styles/main.css'
import '../styles/font.css'
// FONTAWESOME
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head"

const meta = {
  title: 'Website da Zuly',
  description: 'Olá! Sou a zuly, um bot brasileiro focado em anime para o público otaku, com sistemas que bots de anime gringos tem, porém sou 100% brasileira, ou seja, suporte mais fácil e melhor interação!',
}

function MyApp({Component, pageProps}) {
    return (
    <>
    <Head>
    <meta name="robots" content="follow, index"/>
    <meta name="theme-color" content="#ffcbdb"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@ZulyBot"/>
    <meta name="twitter:creator" content="@4DG_YT"/>
    <meta content="Website da Zuly" property="og:site_name"/>
    <meta content="Olá! Sou a zuly, um bot brasileiro focado em anime para o público otaku, com sistemas que bots de anime gringos tem, porém sou 100% brasileira, ou seja, suporte mais fácil e melhor interação!" property="og:description"/>
    <meta content="ZulyBot" property="og:title"/>
    <meta content="600" property="og:ttl"/>
    <script async src="https://arc.io/widget.min.js#dLLm1Tz6"></script>
    </Head>
    <Component {...pageProps}/>
    </>
      )
}

export default MyApp