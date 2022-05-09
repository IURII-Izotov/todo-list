import React from 'react';
import style from "./ToDoList.module.css"
import deleteImg from '../../assets/icons/icon-cross.svg'
type tasksType ={
    id:number,
    text:string,
    completed:boolean
}
export const Task = (props:tasksType) => {
    return (
            <div className={style.task}>
                <div className={style.taskCurrentTextContainer}>
                    <input type="checkbox" className={style.checkbox} checked={props.completed}/>
                    <p className={style.text}>{props.text}</p>
                </div>
                <img className={style.buttonDelete} src={deleteImg} alt="delete"/>
            </div>


    );
};
