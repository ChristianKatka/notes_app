import { RampRightSharp } from "@mui/icons-material";
import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store";

export const getNotes = useAppSelector((state) => state.notesFeature.notes);

// const selectCurrentProject = (state) => state.notesFeature;
// export const selectSelectedProjectIds = createSelector(
//     [selectCurrentProject],
//     (params) => params.notes
//   );