import CreateNote from "./create-note.component";

const CreateNoteContainer = () => {
  const createNote = (note) => {
    console.log("create note");
    console.log(note);
  };

  return (
    <>
      <CreateNote onSubmitNewNote={(note) => createNote(note)} />
    </>
  );
};

export default CreateNoteContainer;
