import styles from './Header.module.scss';
import Logo from 'public/images/logo.svg';
import Whatsapp from 'public/icons/Whatsapp.svg';

export default function Header({ content }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <a href="https://wa.me" className="btn">
            <Whatsapp />
            <span>Fale Conosco</span>
          </a>
        </div>
      </div>
    </header>
  )
}
