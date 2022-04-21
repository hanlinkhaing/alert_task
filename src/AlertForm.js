import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlert } from "./redux/reducer";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function AlertForm(props) {
  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState(10);
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("success");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addAlert({
        id: Date.now(),
        title,
        timeLimit: isNaN(timeLimit) ? 10 : timeLimit,
        text,
        link,
        type,
      })
    );
    setTitle("");
    setTimeLimit(10);
    setText("");
    setLink("");
    setType("success");
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      m={5}
      p={5}
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
    >
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        fullWidth
      />
      <TextField
        label="Time Limit"
        variant="outlined"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
        fullWidth
      />
      <TextField
        label="Text"
        variant="outlined"
        value={text}
        onChange={(event) => setText(event.target.value)}
        fullWidth
      />
      <TextField
        label="Link"
        variant="outlined"
        value={link}
        onChange={(event) => setLink(event.target.value)}
        fullWidth
      />
      <Select
        value={type}
        label="Type"
        onChange={(event) => setType(event.target.value)}
        fullWidth
      >
        <MenuItem value="success">Success</MenuItem>
        <MenuItem value="info">Info</MenuItem>
        <MenuItem value="warning">Warning</MenuItem>
        <MenuItem value="error">Error</MenuItem>
      </Select>
      <Button variant="contained" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
  );
}
