import { BsPlusLg } from "react-icons/bs";
import "./add-new-note.component.scss";

const paramText = "nakkkikeitto";

const AddNewNote = ({ createNoteOutput }) => {
  return (
    <main className="flex fixed bottom-0 w-full justify-center pt-16 custom-linear-gradient">
      <button
        onClick={createNoteOutput}
        className="flex items-center gap-2 bg-gray-800 py-2 px-6 mb-5 rounded-md cursor-pointer"
      >
        <BsPlusLg color="white"></BsPlusLg>
        <p className="text-white font-bold">Add new note</p>
      </button>
    </main>
  );
};

export default AddNewNote;
