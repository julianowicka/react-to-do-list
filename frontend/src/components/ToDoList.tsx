import {ToDoElement} from "./ToDoElement";
import {ChangeEventHandler, useState} from "react";

export const ToDoList = () => {
    const [tasks, setTasks] = useState(["Wspólna nauka", "Omówienie spraw", "Ugotować kolacje", "Obejrzeć The Bpys"])

    const handleAdd = () => {
        console.log("Klikniecie")
        const newTable = [ ...tasks ]
        newTable.push(inputValue)
        setTasks(newTable)   ///   tasks = newTable
        setInputValue("") // inputValue = "" tego nie moge zrobic zapisuje to tak
    }

    const handleDelete = (i: number) => {
        const newTable = [ ...tasks ];
        newTable.splice(i, 1)
        console.log("usuwanie")
        setTasks(newTable)
    }

    const [inputValue, setInputValue] = useState("")

    // const inputValueTab = useState("")
    // const inputValue2 = inputValueTab[0]
    // const setInputValue2 = inputValueTab[1]

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value)
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

            <input onChange={handleChange} value={inputValue} />
            <button onClick={handleAdd}>Dodaj</button>
        </div>
    )
}