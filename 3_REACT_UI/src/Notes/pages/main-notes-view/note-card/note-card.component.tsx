import NotecheckBoxItem from "./note-check-box-item/note-check-box-item.component";
import NoteListItem from "./note-list-item/note-list-item.component";
import NoteTag from "./note-tag/note-tag.component";

const NoteCard = ({ note }) => {
  return (
    <main className="rounded-md bg-gray-100 p-2 w-52 my-4">
      <h3 className="text-gray-600">{note.date}</h3>
      <h3 className="font-bold text-xl mb-2">{note.heading}</h3>
      <div className="mb-3">
        <NoteTag tags={note.tags}></NoteTag>
      </div>

      <ul className="list-disc ml-5">
        {note.listItems.map((listItem: string, i) => (
          <NoteListItem listItem={listItem} key={i}></NoteListItem>
        ))}
      </ul>

      {note.checkBoxItems.map((checkBoxItem: string, i) => (
        <NotecheckBoxItem
          checkBoxItem={checkBoxItem}
          key={i}
        ></NotecheckBoxItem>
      ))}
      <p>{note.text}</p>
    </main>
  );
};

export default NoteCard;
