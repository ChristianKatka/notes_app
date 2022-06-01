import NotesAppWrapper from '../Shared/notes-app-wrapper/notes-app-wrapper.component';
import NoteCard from './Notes/note-card/note-card.component';
import TopUserInfo from './top-user-info/top-user-info';

const HomeContainer = (props) => {
  return (
    <main className='mt-20'>
      <NotesAppWrapper>
        <TopUserInfo></TopUserInfo>
        <Divider></Divider>
        <NoteCard></NoteCard>
      </NotesAppWrapper>
    </main>
  );
};
const Divider = () => <hr className='sidebar-hr my-4' />;

export default HomeContainer;
