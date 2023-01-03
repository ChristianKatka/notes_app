import { getNotes } from "../../services/notes.service";
import CreateNote from "./create-note.component";

const CreateNoteContainer = () => {
  const createNote = async (note) => {
    console.log(note);

    const r = await getNotes();
    console.log(r);
  };

  return (
    <>
      <CreateNote onSubmitNewNote={createNote} />
    </>
  );
};

export default CreateNoteContainer;
