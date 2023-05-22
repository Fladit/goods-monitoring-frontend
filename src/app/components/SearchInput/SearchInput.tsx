import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styles from './SearchInput.module.css';
import classNames from 'classnames';

export const SearchInput = ({ className }: { className?: string }) => {
  return (
        <div className={classNames(styles.root, className)}>
            <InputBase placeholder="Поиск товаров" className={styles.input}/>
            <SearchIcon className={styles.icon}/>
        </div>
  );
};
