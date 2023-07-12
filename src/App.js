import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, TextField, Button } from "@mui/material";
import Button1 from "./components/buton";
import useStore from "./store/store";

export default function App() {
  const div_all = useRef(null);
  const [isRed, setIsRed] = useState(true);
  const Active_all = useRef(null);
  const [mensaje, setMensaje] = useState("");

  const All_color = () => {
    if (isRed) {
      div_all.current.style.borderBottom = "2px solid black";
    } else {
      div_all.current.style.borderBottom = "none";
    }
    setIsRed(!isRed);
  };

  const Active_color = () => {
    if (isRed) {
      Active_all.current.style.borderBottom = "2px solid black";
    } else {
      Active_all.current.style.borderBottom = "none";
    }
    setIsRed(!isRed);
  };

  return (
    <div className="App">
      <h1>#todo</h1>
      <AppBar position="static">
        <Toolbar variant="dense" className="nav">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            onClick={All_color}
            ref={div_all}
            className="All"
          >
            All
          </Typography>
          <Typography
            className="Active"
            variant="h6"
            onClick={Active_color}
            ref={Active_all}
            color="inherit"
            component="div"
          >
            Active
          </Typography>
          <Typography
            className="Completed"
            variant="h6"
            color="inherit"
            component="div"
          >
            Completed
          </Typography>
        </Toolbar>
      </AppBar>{" "}
      <div className="container-input">
        <TextField
          type="text"
          onChange={(e) => setMensaje(e.target.value)}
          fullWidth
          label="add details"
          id="fullWidth"
        />
        <Button1 />
      </div>
    </div>
  );
}
