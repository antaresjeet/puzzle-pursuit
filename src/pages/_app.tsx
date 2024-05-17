import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles.scss'
import '../responsive.scss'
export default function PuzzlePursuit({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <title>Puzzle Pursuit</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="description" content="Test your skills and conquer food matching puzzle in Puzzle Pursuit, a fun and challenging game!" />
        <meta name="keywords" content="puzzle game, brain teaser, logic game, Puzzle Pursuit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Puzzle Pursuit - A Fun and Challenging Game" />
        <meta property="og:description" content="Test your skills and conquer food matching puzzle in Puzzle Pursuit, a fun and challenging game!" />
        <meta property="og:url" content="https://puzzle-pursuit.vercel.app/" />
        <meta property="og:image" content="https://puzzle-pursuit.vercel.app/puzzle-pursuit.jpg" />
        <meta name="author" content="antaresjeet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}