import {ToDoElement} from "./ToDoElement";
import {ChangeEventHandler, useCallback, useState} from "react";

export const ToDoList = () => {
    const [tasks, setTasks] = useState(["Wspólna nauka", "Omówienie spraw", "Ugotować kolacje", "Obejrzeć The Boys"])

    const handleAdd = () => {
        const newTable = [...tasks]
        newTable.push(inputValue)
        setTasks(newTable)
        setInputValue("")
    }

    const handleDelete = useCallback((i: number) => {
        const newTable = [...tasks];
        newTable.splice(i, 1)

        setTasks(newTable)
    }, [tasks]);

    const [inputValue, setInputValue] = useState("")

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>

            <h2> Lista </h2>
            <ul>
                {
                    tasks.map((task, i) => {

                        return <ToDoElement taskName={task} index={i} onDelete={handleDelete}/>
                    })
                }
            </ul>

            <input onChange={handleChange} value={inputValue}/>
            <button onClick={handleAdd}>Dodaj</button>
        </div>
    )
}