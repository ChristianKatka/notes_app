import { TextField } from "@material-ui/core";
import { useState } from "react";

const CreateNote = ({ onSubmitNewNote }) => {
  const [input, setInput] = useState({});

  const submit = () => {
    onSubmitNewNote(input);
  };

  return (
    <>
      <TextField
        label="Otsikko"
        variant="outlined"
        onChange={(e) => setInput({ ...input, heading: e.target.value })}
      ></TextField>

      <TextField
        label="Muistiinpano"
        variant="outlined"
        onChange={(e) => setInput({ ...input, text: e.target.value })}
      ></TextField>
      <button onClick={submit}>Submit</button>
    </>
  );
};

export default CreateNote;
