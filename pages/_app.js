import AppProvider from '../utils/provider';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Head>
        <title>Danny Nguyen</title>
        <meta name="title" content="Danny Nguyen" />
        <meta name="description" content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices." />
        <meta name="keywords" content="Danny, Nguyen, Portfolio, Web, Developer" />
        <meta property="og:image"  content="/static/cover.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet='UTF-8' />
        <link rel='canonical' href='https://portfolio-dnguyen130.vercel.app/' />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/statc/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#030f22" />
        <meta name="msapplication-TileColor" content="#030f22" />
        <meta name="theme-color" content="#030f22" />

        {/* Facebook / Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-dnguyen130.vercel.app/" />
        <meta property="og:title" content="Danny Nguyen" />
        <meta property="og:description" content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices." />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-dnguyen130.vercel.app/" />
        <meta property="twitter:title" content="Danny Nguyen" />
        <meta property="twitter:description" content="Danny Nguyen is a front-end developer who enjoys developing interactive and accessible experiences on web and mobile devices." />
        <meta property="twitter:image" content="/static/cover.png" />

      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
