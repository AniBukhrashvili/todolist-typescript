import React from "react";
import { InterfaceTask } from "../Interfaces";

import { Typography, Divider, Box, Grid, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  task: InterfaceTask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <Box
      border={1}
      borderColor="grey.300"
      borderRadius={4}
      marginBottom={2}
      padding={2}
    >
      <Grid container justifyContent={"center"} alignItems="center">
        <Grid item>
          <Typography gutterBottom>Task</Typography>
          <Typography variant="h6" color={"#1976d2"}>
            {task.taskName}
          </Typography>
          <Divider style={{ margin: "10px 0" }} />
          <Typography gutterBottom>Deadline In Days</Typography>
          <Typography variant="h6" color={"#1976d2"}>
            {task.deadline} Days
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => completeTask(task.taskName)}>
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
