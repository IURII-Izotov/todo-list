import React from 'react';
import style from "./Header.module.css"

export const Header = (props:any) => {
    return (
        <header className={style.header}>
            <span className={style.auth}> {props.aunt ? props.nameAunt :"Login"}</span>
        </header>
    );
};

