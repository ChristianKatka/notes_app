import { CircularProgress } from "@material-ui/core";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store";
import AddNewNoteButton from "../../components/add-new-note-button/add-new-note-button.component";
import { masonryBreakPoints } from "../../constants";
import NoteCard from "./note-card/note-card.component";

const MainNotesViewContainer = () => {
  const navigate = useNavigate();

  const notes = useAppSelector((state) => state.notesFeature.notes);
  const isLoading = useAppSelector((state) => state.notesFeature.loading);

  return (
    <>
      {isLoading && (
        <main className="center">
          <CircularProgress />
        </main>
      )}
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
