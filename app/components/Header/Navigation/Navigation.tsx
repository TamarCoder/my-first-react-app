import styles from './Navigation.module.css';
import NavigationItem from './NavigationItems/NavigationItems';

export default () => {
    return (
        <nav className={styles.navigation}>
             <NavigationItem/>
        </nav>
    )
}