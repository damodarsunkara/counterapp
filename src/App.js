import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Height, PinDropSharp } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

function App() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      gap={2}
      sx={{}}
      className="App"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        sx={{
          backgroundColor: "lightblue", 
          borderRadius: 2,
          border: "1px solid #1976d2",
          width: 400,
          padding: 3,
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          Height="100vh"
          gap={2}
        >
          <Button variant="contained" onClick={dec}>
            decreament
          </Button>
          <p>Count:{count}</p>
          <Button variant="contained"  onClick={inc}>
            increament
          </Button>
        </Box>

        <Box>
          <Button variant="contained" color="success" onClick={reset}>
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
