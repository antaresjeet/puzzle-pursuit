import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles.scss'
import '../responsive.scss'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function PuzzlePursuit({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <title>Puzzle Pursuit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Test your skills and conquer food matching puzzle in Puzzle Pursuit, a fun and challenging game!" />
        <meta name="keywords" content="puzzle game, brain teaser, logic game, Puzzle Pursuit, food matching puzzle, skill-based game, challenging puzzles, fun games, addictive puzzles, mobile puzzle game, online brain teaser, mind game, logic puzzles, strategy game, mental challenge, casual games, matching game" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Puzzle Pursuit - A Fun and Challenging Game" />
        <meta property="og:description" content="Test your skills and conquer food matching puzzle in Puzzle Pursuit, a fun and challenging game!" />
        <meta property="og:url" content="https://puzzle-pursuit.vercel.app/" />
        <meta property="og:image" content="https://puzzle-pursuit.vercel.app/puzzle-pursuit.jpg" />
        <meta property="og:site_name" content="Puzzle Pursuit" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Puzzle Pursuit" />
        <meta name="twitter:description" content="Test your skills and conquer food matching puzzle in Puzzle Pursuit, a fun and challenging game!" />
        <meta name="twitter:url" content="https://puzzle-pursuit.vercel.app/" />
        <meta name="twitter:image" content="https://puzzle-pursuit.vercel.app/puzzle-pursuit.jpg" />
        <meta name="twitter:creator" content="@jeetisxo" />

        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="google-site-verification" content="GDMvkcIIhoR4e5RwNW-KhKKgyRi1pmKPzUpyY4arvrc" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}