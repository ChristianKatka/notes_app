import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNotes } from "../../services/notes.service";

// export const fetchData = () => async (dispatch) => {
//   try {
//     const response = await getNotes().then((res) => res);
//     console.log(response);
//     dispatch(hydrateUsers(response))
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getNotesThunk = createAsyncThunk("[notes] Get Notes", async () => {
  const notes = await getNotes().then((res) => res);
  return {notes};
});
