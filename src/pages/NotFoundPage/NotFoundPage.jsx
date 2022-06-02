import { Link } from 'react-router-dom';
import errImage from '../../404image.webp';

import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div
      style={{
        blockSize: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <img src={errImage} alt="" />
      <Link to="/" className={s.homeLink}>
        Вернуться домой
      </Link>
    </div>
  );
};

export default NotFoundPage;
