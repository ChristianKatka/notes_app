import { TextField, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TagComponent from "./add-tags/tag/tag.component";
import AddTagsComponent from "./add-tags/add-tags.component";

const CreateNote = ({ onSubmitNewNote }) => {
  const headingText = (e) => {};

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
      <p>tekstit</p>
    </>
  );
};

export default CreateNote;
