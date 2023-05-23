import '@/styles/style.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Mitr } from "next/font/google";

const mitr = Mitr({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mitr.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
