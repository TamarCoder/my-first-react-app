
"use client";
import { useState } from "react";
import Logo from "../../Header/Logo/Logo";
import styles from "./FormsInputs.module.css";
import { CostomButtons } from "../../CostomButtons/CostomButtons";
import Inputs from "./Inputs/Inputs";

const FormsInputs = () => {
    const [isLogin, setIsLogin] = useState(true); // true → login, false → register

    return (
        <form className={styles.formContainer}>
            <div className={styles.singIn}>
                <Logo />
                {isLogin ? (
                    <>
                        <Inputs
                            lableTtitle="Enter your email"
                            idInp="email"
                            typeInp="email"
                        />
                        <Inputs
                            lableTtitle="Enter your password"
                            idInp="password"
                            typeInp="password"
                        />
                        <CostomButtons title="Sign in" />
                        <CostomButtons
                            title="Sign up"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLogin(false);
                            }}
                        />
                    </>
                ) : (
                    <div className={styles.singUp}>
                        <div className={styles.singUpNames}>
                            <Inputs
                                lableTtitle="First name"
                                idInp="username"
                                typeInp="text"
                            />
                            <Inputs lableTtitle="Last Name" idInp="email" typeInp="email" />
                        </div>

                        <div>
                            <Inputs
                                lableTtitle="Enter your email"
                                idInp="email"
                                typeInp="email"
                            />

                            <Inputs
                                lableTtitle="Create a password"
                                idInp="password"
                                typeInp="password"
                            />
                        </div>
                        <CostomButtons title="Registration" />
                    </div>
                )}
            </div>
        </form>
    );

};

export default FormsInputs;