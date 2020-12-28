import styles from '../../styles/BackButton.module.scss';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

const BackButton = () => {
  const router = useRouter();
  const handleBackToPreviousPage = () => {
    router.back();
  };
  return (
    <div className={styles.backContainer}>
      <Button className={styles.backButton} onClick={handleBackToPreviousPage}>
        FM
      </Button>
    </div>
  );
};

export default BackButton;
