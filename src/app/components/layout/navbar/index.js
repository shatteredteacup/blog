import { Link, useLocation } from 'react-router-dom';
import { getAboutPath, getHomePath } from '../../../../config/theme/selectors';
import InformationIcon from '../../../../assets/icons/information';
import styles from './index.module.css';
import BackIcon from '../../../../assets/icons/back';

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.navBar}>
      {getHomePath() !== pathname && (
        <Link className={styles.homeLink} to={getHomePath()}>
          <BackIcon />
        </Link>
      )}
      <Link className={styles.infoLink} to={getAboutPath()}>
        <InformationIcon />
      </Link>
    </nav>
  );
};

export default NavBar;
