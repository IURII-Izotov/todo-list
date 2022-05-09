import React from 'react';
import style from './ToDoList.module.css'
import {Task} from "./Task";
export const ToDoList = () => {
    type tasksType ={
        id:number,
        text:string,
        completed:boolean
    }
    let tasks = [
        {id:1,text:'wwr',completed:false},
        {id:2,text:'rwqrqw',completed:false},
        {id:3,text:'rwqr',completed:true},
        {id:4,text:'rwqwqr',completed:false},
    ]
    return (
        <div className={style.listContainer}>
            <div className={style.listHeaderContainer}>
                <input type='text' className={style.listHeader}/>
                <button className={style.button}>ADD</button>
            </div>

            <div className={style.tasksContainer}>
                {
                    tasks.map((task: tasksType) => {
                        return <Task text={task.text} completed={task.completed} id={task.id}/>
                    })
                }
                <div className={`${style.listFooter} ${style.task}`}>
                    <span className={style.numberTasks}>5 items left</span>
                    <div className={style.filterContainer}>
                        <div className={`${style.activeFilter} ${style.filter}`}>All</div>
                        <div className={`${style.filter}`}>Active</div>
                        <div className={`${style.filter}`}>Complited</div>
                    </div>
                    <div className={style.clearComplited}>Clear Complited</div>

                </div>
            </div>
        </div>
    );
};
