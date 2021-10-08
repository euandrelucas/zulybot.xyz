// CSS FILES
import '../styles/main.css';
import '../styles/font.css';
import dynamic from 'next/dynamic'
// FONTAWESOME
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
const GoTop = dynamic(() => import('./components/GoTop'))

const meta = {
  title: 'Website da Zuly',
  description: 'Olá! Sou a zuly, um bot brasileiro focado em anime para o público otaku, com sistemas que bots de anime gringos tem, porém sou 100% brasileira, ou seja, suporte mais fácil e melhor interação!',
}

function MyApp({Component, pageProps}) {
    return (
    <>
    <Head>
    <title>Zuly | Website</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    <meta name="keywords" content="Zuly, Discord, Bot, Eris, Free, Anime, NSFW, discord, bots, bot discord, botlist, top.gg, bot, discord bot, robot, zuraaa, bots para discors, discord bots, best, best list, best list online, list, bots, bots do discord, bots of discord, discord bot list, discord server, discord bots add, top.gg, top gg, top, addbot, criar bot do discord, como criar bot do discord, adicionar bot, discord.js, javascript bot, bots para discord, bots in discord, bidlist, bidlist.xyz, star bot, star discord bot, zuly, mudae, zuly bot"/>
    <meta name="robots" content="follow, index"/>
    <meta name="theme-color" content="#ffcbdb"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@ZulyBot"/>
    <meta name="twitter:creator" content="@4DG_YT"/>
    <meta content="Website da Zuly" property="og:site_name"/>
    <meta content="Olá! Sou a zuly, um bot brasileiro focado em anime para o público otaku, com sistemas que bots de anime gringos tem, porém sou 100% brasileira, ou seja, suporte mais fácil e melhor interação!" property="og:description"/>
    <meta content="ZulyBot" property="og:title"/>
    <meta content="600" property="og:ttl"/>
    <meta name='dmca-site-verification' content='cGVrd3JxaktEeDVJQ3FaVWs2Tzdkdz090'/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8508672573175230"
     crossorigin="anonymous"/>
    <title>Zuly | Website</title>
    </Head>
    <Component {...pageProps}/>
    <GoTop/>
    </>
      )
}

export default MyApp
