import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { InterfaceTask } from "./Interfaces";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { TodoTask } from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<InterfaceTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    if (!task || !deadline) {
      return;
    }

    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <Typography variant="h5" marginTop={"16px"} color="#1976d2">
        To Do List
      </Typography>
      <Grid container spacing={2} justifyContent="center" marginTop={"20px"}>
        <Grid item>
          <TextField
            label="Task"
            id="outlined-size-small"
            type="text"
            value={task}
            name="task"
            size="small"
            margin="normal"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Deadline"
            id="outlined-size-small"
            type="number"
            value={deadline}
            name="deadline"
            size="small"
            margin="normal"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button variant="outlined" onClick={addTask}>
        Add Task
      </Button>

      <Grid container justifyContent="center" mt={"50px"}>
        <Grid item width={"500px"}>
          {todoList.map((task: InterfaceTask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
