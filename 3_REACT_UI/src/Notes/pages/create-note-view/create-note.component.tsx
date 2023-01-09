import { TextField, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TagComponent from "./add-tags/tag/tag.component";
import AddTagsComponent from "./add-tags/add-tags.component";

const CreateNote = ({ onSubmitNewNote }) => {
  let note = {};
  const headingText = (event) => {
    note = { ...note, heading: event.target.value };
  };
  const noteText = (event) => {
    note = { ...note, text: event.target.value, tags: ["React", "Angular"] };
  };

  const createNote = () => {
    onSubmitNewNote(note);
  };
  return (
    <>
      <section className="my-10">
        <TextField
          className="w-full"
          size="small"
          type="text"
          onChange={(e) => headingText(e)}
          label="Enter note title"
          variant="outlined"
        />
      </section>

      <AddTagsComponent />
      <section className="my-10">
        <TextField
          className="w-full"
          size="small"
          type="text"
          onChange={(e) => noteText(e)}
          label="The note"
          variant="outlined"
        />
      </section>

      <button onClick={createNote}>Create note</button>
    </>
  );
};

export default CreateNote;
