import {Button, Checkbox, FormControlLabel} from "@mui/material";
import React from "react";

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
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <li>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                    />
                    }
                    label={`Task ${index}: ${taskName}`}

            />

            <Button onClick={handleDelete}>Usuń</Button>
        </li>
    );
}