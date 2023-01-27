import { CircularProgress } from "@material-ui/core";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { masonryBreakPoints } from "../../constants";
import { notesControlData } from "../../store/selectors/notes.selectors";
import AddNewNoteButton from "../components/add-new-note-button/add-new-note-button.component";
import NoteCard from "./note-card/note-card.component";

const MainNotesViewContainer = () => {
  const navigate = useNavigate();

  const notesData = useSelector(notesControlData);

  return (
    <>
      {notesData.isLoading && (
        <section className="center">
          <CircularProgress />
        </section>
      )}

      {!notesData.isLoading && (
        <section>
          <Masonry
            breakpointCols={masonryBreakPoints}
            className="flex"
            columnClassName="my-masonry-grid_column"
          >
            {notesData.notes.map((note) => (
              <NoteCard note={note} key={note.id}></NoteCard>
            ))}
          </Masonry>
          <AddNewNoteButton
            openCreateNewNotePage={() => navigate(`/create-note`)}
          ></AddNewNoteButton>
        </section>
      )}
    </>
  );
};

export default MainNotesViewContainer;
