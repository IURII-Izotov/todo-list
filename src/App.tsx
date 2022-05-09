import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import { ToDoList } from './Components/ToDoList/ToDoList';

function App() {
    return (
        <>
            <Header aunt={false} nameAunt='iurii_izotov'/>
            <div className="listWrapper">
                <ToDoList/>

            </div>

        </>
    )
}

export default App;
