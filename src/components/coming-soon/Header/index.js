import styles from './Header.module.scss';
import Logo from 'public/images/logo.svg';
import Icon from 'public/images/icon.svg';
import Whatsapp from 'public/icons/Whatsapp.svg';

export default function Header({ content }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo className="d-none d-lg-block" />
          <Icon className="d-block d-lg-none" width="40" height="40" />
          <a href="https://wa.me/+5551985109049" className="btn" target="_blank">
            <Whatsapp />
            <span>Fale Conosco</span>
          </a>
        </div>
      </div>
    </header>
  )
}
