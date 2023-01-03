import { TextField } from "@material-ui/core";
import { useState } from "react";

const CreateNoteContainer = ({onUserInputSubmitted}) => {
  const [input, setInput] = useState("");

  const submit = () => onUserInputSubmitted = input;

  return (
    <>
      <TextField
        label="Note"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      ></TextField>

      <button onClick={submit}>Submit</button>
    </>
  );
};

export default CreateNoteContainer;
