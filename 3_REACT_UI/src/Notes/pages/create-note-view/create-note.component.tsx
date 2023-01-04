import { TextField, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./create-note.component.css";
import TagComponent from "./tag/tag.component";

const CreateNote = ({ onSubmitNewNote }) => {
  const [input, setInput] = useState({});

  const submit = () => {
    onSubmitNewNote(input);
  };

  let tags = ["React", "Tea", "Tortilla"];

  const deleteTag = (tag: string) => {
    console.log("deletet ag");
    // tags.splice(tag, 1);
  };

  return (
    <>
      <main className="flex-row align-center-center bg-gray h-14 rounded">

        {tags.map((tag, i) => (
          <TagComponent key={i} tag={tag} deleteTag={(tag) => deleteTag(tag)}/>
        ))}

        <form className="rounded-md ">
          <input
            className="ml-2"
            type="text"
            placeholder="Add tag"
          />
        </form>
      </main>

    </>
  );
};

export default CreateNote;
