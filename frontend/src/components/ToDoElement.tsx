type Props = {
    taskName: string,
    index: number,
    onDelete: (i: number) => void,
}
export const ToDoElement = (props: Props) => {

    const handleDelete = () => {
        console.log("usuniecie" + props.index)
        props.onDelete(props.index)
    }

    return (
        <li>
            Task {props.index}: {props.taskName}
            <button onClick={handleDelete}>Usuń</button>
        </li>
    )
}