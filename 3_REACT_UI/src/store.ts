import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { listenerMiddleware } from "./Notes/store/efects/note.efects";
import { noteSlice } from "./Notes/store/slices/note.slice";

export const store = configureStore({
  reducer: { notesFeature: noteSlice.reducer },



  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([listenerMiddleware.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
