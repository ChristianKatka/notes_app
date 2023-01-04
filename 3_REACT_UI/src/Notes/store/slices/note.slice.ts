import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../models/note.model";
import { getNotesThunk } from "../thunks/note.thunk";

interface NoteState {
  notes: Note[];
  loading: boolean;
}

const initialState: NoteState = {
  notes: [],
  loading: false,
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // noteActions.getNotes: (state, action) => {
    //     console.log(action.payload);
    //     return {...state, notes: action.payload}
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getNotesThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getNotesThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          notes: payload.notes,
        };
      })
      .addCase(getNotesThunk.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      });
  },
});

// export const { hydrateUsers } = noteSlice.actions
export default noteSlice.reducer;
