import CreateNote from "./create-note.component";

const CreateNoteContainer = () => {
  const createNote = (note) => {
    console.log(note);
  };

  return (
    <>
      <CreateNote onSubmitNewNote={createNote} />
    </>
  );
};

export default CreateNoteContainer;
