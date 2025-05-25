import styles from './Inputs.module.css'


   type Props = {
        lableTtitle :  string;
        idInp: string;
        typeInp: string
    }
export default (prop : Props) =>{

    return(
        <div className={styles.container}>
            <label htmlFor={prop.idInp} className={styles.lable}>{prop.lableTtitle}</label>
            <input className={styles.Input} type= {prop.typeInp} id= {prop.idInp} placeholder={prop.lableTtitle}/>
        </div>
    )
}