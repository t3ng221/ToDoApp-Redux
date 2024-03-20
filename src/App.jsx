import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllToDo, removeToDo } from "./features/todo/todoSlice";
import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";

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
            Add ToDo
          </Button>
        </FormControl>
      </Grid>
      <Container fixed>
        <ul>
          {todos.length !== 0 ? (
            todos.map((e) => (
              <li key={e.id}>
                <h2>
                  {e.text}{" "}
                  <Button
                    onClick={() => dispatch(removeToDo({ id: e.id }))}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </h2>
              </li>
            ))
          ) : (
            <h2>No Task Available</h2>
          )}
        </ul>
        <Button onClick={() => dispatch(removeAllToDo())} variant="contained">
          Delete All
        </Button>
      </Container>
    </>
  );
}

export default App;
