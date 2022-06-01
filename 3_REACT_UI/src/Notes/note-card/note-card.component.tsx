import NotesAppWrapper from '../../Shared/notes-app-wrapper/notes-app-wrapper.component';
import NoteTag from '../note-tag/note-tag.component';

const NoteCard = (props) => {
  return (
    <NotesAppWrapper>
      <main className='rounded-md bg-gray-100 p-2'>
        <h3 className='text-gray-400'>20 APR</h3>
        <h3 className='font-bold'>Exploration ides</h3>
        <div>
          <NoteTag text={'Design'}></NoteTag>
        </div>
        <p>Have to remember</p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </main>
    </NotesAppWrapper>
  );
};

export default NoteCard;
