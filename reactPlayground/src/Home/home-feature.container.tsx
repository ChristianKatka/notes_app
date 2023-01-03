import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeContainer from "./home.container";
import CreateNoteContainer from "./create-note/create-note.container";
import NotesAppWrapper from "../Shared/notes-app-wrapper/notes-app-wrapper.component";
import { Divider } from "../Shared/divider/notes-app-wrapper.component";
import TopUserInfo from "./top-user-info/top-user-info";

const HomeFeatureContainer = () => {
  const logInputValue = (value) => console.log(value);

  return (
    <main className="mt-6 mb-24">
      <NotesAppWrapper>
        <TopUserInfo></TopUserInfo>
        <Divider></Divider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route
              path="/create-note"
              element={
                <CreateNoteContainer
                  onUserInputSubmitted={(inputValue) =>
                    logInputValue(inputValue)
                  }
                />
              }
            ></Route>
            {/* <Route path="/*" element={<NotFound />}></Route> */}
          </Routes>
        </BrowserRouter>
      </NotesAppWrapper>
    </main>
  );
};

export default HomeFeatureContainer;
