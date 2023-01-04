import { getNotes } from "../../services/notes.service";
import CreateNote from "./create-note.component";

const CreateNoteContainer = () => {
  const createNote = (x) => {
    console.log(x);
    
    console.log('create note');
    
  }

  return (
    <>
      <CreateNote onSubmitNewNote={createNote} />
    </>
  );
};

export default CreateNoteContainer;
