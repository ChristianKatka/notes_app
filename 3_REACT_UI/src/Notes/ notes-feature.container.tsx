import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "../Shared/app-wrapper/app-wrapper.component";
import { Divider } from "../Shared/divider/divider.component";
import TopUserInfoBarContainer from "./pages/components/top-user-info-bar/top-user-info-bar.container";
import CreateNoteContainer from "./pages/create-note-view/create-note.container";
import MainNotesViewContainer from "./pages/main-notes-view/main-notes-view.container";
import { notesGet } from "./store/reducers/notes.reducer";

const NotesFeatureContainer = () => {
  const dispatch = useDispatch();

  const effectCalled = useRef(true);
  useEffect(() => {
    if (effectCalled.current) {
      effectCalled.current = false;
      dispatch(notesGet());
    }
  }, []);

  return (
    <main className="mt-6 mb-24">
      <AppWrapper>
        <TopUserInfoBarContainer></TopUserInfoBarContainer>
        <Divider></Divider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainNotesViewContainer />}></Route>
            <Route
              path="/create-note"
              element={<CreateNoteContainer />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </main>
  );
};

export default NotesFeatureContainer;
