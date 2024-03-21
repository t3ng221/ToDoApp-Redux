import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllToDo, removeToDo } from "./features/todo/todoSlice";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert, Button, Container, FormControl, Grid } from "@mui/material";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const [text, setText] = useState("");
  // initial the dispatch here
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText(null);
    console.log("hello");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl>
          <h1>Enter Task Your Task Details</h1>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            id="fullWidth"
          />
          <Button
            disabled={!text && true}
            onClick={() => addTodoHandler()}
            variant="contained"
          >
            Add Task
          </Button>
        </FormControl>

        <Container container>
          <ul>
            {todos.length !== 0 ? (
              todos.map((e) => (
                <li key={e.id}>
                  <Alert variant="outlined" severity="info">
                    <h2 className="mt-10">
                      {e.text}{" "}
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => dispatch(removeToDo({ id: e.id }))}
                        variant="contained"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </h2>
                  </Alert>
                </li>
              ))
            ) : (
              <h2>No Task Available</h2>
            )}
          </ul>
          <Button
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={() => dispatch(removeAllToDo())}
            variant="contained"
          >
            Delete All
          </Button>
        </Container>
      </Grid>
    </>
  );
}

export default App;
