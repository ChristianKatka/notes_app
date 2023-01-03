import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import AddNewNoteButton from "../../components/add-new-note-button/add-new-note-button.component";
import { masonryBreakPoints } from "../../constants";
import { Note } from "../../models/note.model";
import getNotes from "../../services/notes.service";
import NoteCard from "./note-card/note-card.component";

const MainNotesViewContainer = () => {
  const notes: Note[] = getNotes();

  const navigate = useNavigate();
  return (
    <>
      <Masonry
        breakpointCols={masonryBreakPoints}
        className="flex"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <NoteCard note={note} key={note.id}></NoteCard>
        ))}
      </Masonry>
      <AddNewNoteButton
        openCreateNewNotePage={() => navigate(`/create-note`)}
      ></AddNewNoteButton>
    </>
  );
};

export default MainNotesViewContainer;
