import { MouseEventHandler } from 'react';
import styles from './CostomButtons.module.css'



type Props = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CostomButtons = ({ title, onClick }: Props) => {
  return (
    <button className={styles.customBtn} onClick={onClick}>
      {title}
    </button>
  );
};
 