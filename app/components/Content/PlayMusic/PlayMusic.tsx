import  styles from './PlayMusic.module.css';
import {ArrowLeftOutlined, PauseCircleOutlined, PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined, UnorderedListOutlined} from "@ant-design/icons";
import dayjs from "dayjs";

export  default () => {
     return (
         <div className={styles.boxContianer}>
              <div className={styles.top}>
                   <div className={styles.arrowIcon}>
                       <ArrowLeftOutlined/>
                   </div>
                   <div className={styles.textCenter}>
                       <p className={styles.textSpan}>Now Playing</p>
                   </div>
                   <div className={styles.burgerIcon}>
                       <UnorderedListOutlined />
                   </div>
              </div>
              <div className={styles.center}>
                   <div className={styles.playBackground}>
                       <div className={styles.plate}>
                          <img src="/vinil.jpg" alt="vinil" className={styles.plateImg}/>
                          <div className={styles.inside}></div>
                          <div className={styles.insideTwo}></div>
                           <div className={styles.playFront}>
                              <div className={styles.frontShadow}>
                                <p className={styles.songName}>Merry Cristams</p>
                                <div className={styles.controls}>
                                    <StepBackwardOutlined />
                                    <PlayCircleOutlined />
                                    <StepForwardOutlined />
                                </div>
                              </div>
                              <div className={styles.songRange}>
                                 აქანე იქნება  მუზიკის  რეინჯი
                              </div>
                          </div>
                          
                      </div>
                   
                  </div>
                  
              </div>
              <div className={styles.bottom}></div>
         </div>
     )
}