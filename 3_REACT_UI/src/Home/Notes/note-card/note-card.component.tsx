import NoteListItem from './note-list-item.component.tsx/note-list-item.component';
import NoteTag from './note-tag/note-tag.component';

const NoteCard = ({ note }) => {
  return (
    <main className='rounded-md bg-gray-100 p-2 w-52 my-4'>
      <h3 className='text-gray-600'>{note.date}</h3>
      <h3 className='font-bold text-lg'>{note.heading}</h3>
      <div>
        <NoteTag tags={note.tags}></NoteTag>
      </div>
      <ul className='list-disc ml-5'>
        {note.listItems.map((listItem: string) => (
          <NoteListItem listItem={listItem} key={listItem}></NoteListItem>
        ))}
      </ul>
      <p>{note.text}</p>
    </main>
  );
};

export default NoteCard;
