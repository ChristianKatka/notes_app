import { createSlice } from "@reduxjs/toolkit";
import { createObjectMap } from "../../../Shared/utils/create-object-map.util";

export interface NotesState {
  entities: { [id: string]: any };
  loading: boolean;
}

export const initialState: NotesState = {
  entities: {},
  loading: false,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    notesGet(state) {
      state.loading = true;
    },
    notesGetSuccess(state, { payload }) {
      state.loading = false;
      state.entities = createObjectMap(payload.notes);
    },
    notesGetFailed(state, { payload }) {
      state.loading = false;
    },
  },
});

export const { notesGet, notesGetSuccess, notesGetFailed } = notesSlice.actions;
