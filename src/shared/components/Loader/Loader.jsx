import { SpinnerDiamond } from 'spinners-react';

import styles from './Loader.module.css';

const Loader = ({ isEnabled }) => {
  return (
    <div className={styles.Loader}>
      <SpinnerDiamond
        enabled={isEnabled}
        size={90}
        thickness={114}
        speed={180}
        color="rgba(57, 78, 172, 1)"
        secondaryColor="rgba(0, 0, 0, 0.39)"
      />
    </div>
  );
};

export default Loader;
