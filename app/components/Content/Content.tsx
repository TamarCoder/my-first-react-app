 "use client"
import styles from "./Content.module.css";
import PlayMusic from "./PlayMusic/PlayMusic";

// import ForsmInputs from "./FormInputs/ForsmInputs";




export default function Content() {

  return (
    <main className={styles.mainContainer}>
        {/*<ForsmInputs/>*/}
        <PlayMusic/>
    </main>
  );
}
