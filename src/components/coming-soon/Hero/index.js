import styles from './Hero.module.scss';
import Instagram from 'public/icons/Instagram.svg';
import YouTube from 'public/icons/Youtube.svg';
import LinkedIn from 'public/icons/Linkedin.svg';

export default function Hero({ content }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <p className="btn outline">10 Anos da Abarca</p>
              <h1>Em Breve Novidades</h1>
              <p>
                Nos acompanhe nas redes sociais e fique sabendo em primeira mão sobre os novos rumos da Abarca.
                <br />
                <strong>Vem navegar com a gente!</strong>
              </p>
              <div className={styles.socials}>
                <a href="https://www.instagram.com/abarca.comunica/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://www.youtube.com/channel/UCLRG6sBwaQzzoieIibD5iow" target="_blank" rel="noopener noreferrer">
                  <YouTube />
                </a>
                <a href="https://www.linkedin.com/company/abarcacomunica/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.video}>
              <video src="/videos/pattern.mp4" autoPlay loop muted />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
