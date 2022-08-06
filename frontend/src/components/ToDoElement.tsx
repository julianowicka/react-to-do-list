type Props = {
    taskName: string,
    index: number,
    onDelete: (i: number) => void,
}
export const ToDoElement = (props: Props) => {

    const {taskName, index, onDelete: handleDeleteElement} = props;

    const handleDelete = () => {
        handleDeleteElement(index)
    }

    return (
        <li>
            Task {index}: {taskName}
            <button onClick={handleDelete}>Usuń</button>
        </li>
    )
}