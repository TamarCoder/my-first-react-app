import styles from './NavigationItems.module.css';





export default () => {

    const list =  ['Home', 'About', 'Projects', 'Contact']

    return (
        <ul className={styles.lists}>
             {
                 list.map((item, index) => (
                    <li key={item} className={styles.list}>{item}</li>
                ))
             }
        </ul>
    )
}