import React from 'react';
import {ToDoList} from "./components/ToDoList";
import {Typography} from "@mui/material";


function App() {
  return (
    <div className="App">
        <Typography variant="h1">To do list</Typography>
        <ToDoList />
    </div>
  );
}

export default App;
