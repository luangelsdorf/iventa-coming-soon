import styles from './Header.module.scss';
import Logo from 'public/images/logo.svg';
import LogoVertical from 'public/images/logo-v.svg';
import Whatsapp from 'public/icons/Whatsapp.svg';

export default function Header({ content }) {
  return (
    <header className={styles.header}>
      <div className="container" style={{ position: 'relative' }}>
        <div className={styles.inner}>
          <Logo className="d-none d-lg-block" />
          <LogoVertical className="d-block d-lg-none" />
        </div>
      </div>
    </header>
  )
}
