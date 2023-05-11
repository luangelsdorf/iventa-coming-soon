import '@/styles/style.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ['500', '600'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
