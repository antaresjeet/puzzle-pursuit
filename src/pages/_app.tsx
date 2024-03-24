import { AppProps } from 'next/app'
import '../styles.scss'
import '../responsive.scss'
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