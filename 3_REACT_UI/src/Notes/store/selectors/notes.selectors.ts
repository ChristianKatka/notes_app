import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { NotesState } from "../reducers/notes.reducer";

const selectFeatureNotes = (state: RootState) => state.notes as NotesState;

const getNotes = createSelector(
  [selectFeatureNotes],
  (state) => Object.values(state.entities)
);

const isLoading = createSelector(
  [selectFeatureNotes],
  (state) => state.loading
);

export const notesControlData = createSelector(
  [getNotes, isLoading],
  (notes, isLoading) => ({ notes, isLoading })
);
