import styles from './Hero.module.scss';
import Instagram from 'public/icons/Instagram.svg';
import Tiktok from 'public/icons/Tiktok.svg';
import Facebook from 'public/icons/Facebook.svg';
import Pinterest from 'public/icons/Pinterest.svg';
import YouTube from 'public/icons/Youtube.svg';
import imageDesktop from 'public/images/iventa-desktop.gif';
import imageMobile from 'public/images/iventa-mobile.gif';
import Image from 'next/image';

export default function Hero({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 p-lg-0">
            <div className={styles.textContent}>
              <h1>Em Breve <br className="d-block d-xl-none" />Novidades</h1>
              <p>
                Nos acompanhe nas redes sociais e fique <br className="d-none d-xl-block" />sabendo em primeira o que está por vir.
              </p>
              <div className={styles.socials}>
                <a href="https://www.instagram.com/iventaoficial/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://www.tiktok.com/@iventaoficial" target="_blank" rel="noopener noreferrer">
                  <Tiktok />
                </a>
                <a href="https://www.facebook.com/iventaoficial" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="https://pinterest.com/iventaoficial/" target="_blank" rel="noopener noreferrer">
                  <Pinterest />
                </a>
                <a href="https://www.youtube.com/@iventaoficial" target="_blank" rel="noopener noreferrer">
                  <YouTube />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className={styles.image}>
              <Image src={imageDesktop} className={styles.desk} />
              <Image src={imageMobile} className={styles.mobi} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
