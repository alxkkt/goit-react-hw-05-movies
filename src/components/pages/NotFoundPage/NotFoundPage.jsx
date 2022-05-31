import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        blockSize: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <p>Opps, this page doesn't exist, loshara</p>
      <Link to="/">Вернуться домой</Link>
    </div>
  );
};

export default NotFoundPage;
