import { AppProps } from 'next/app'
import '../styles.css'
export default function PuzzlePursuit({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}