import { BsPlusLg } from "react-icons/bs";

const AddNewNoteButton = ({ openCreateNewNotePage }) => {
  return (
    <main className="flex fixed bottom-0 w-full justify-center pt-16 white-gradient-background">
      <button
        onClick={openCreateNewNotePage}
        className="flex items-center gap-2 bg-gray-800 py-2 px-6 mb-5 rounded-md cursor-pointer"
      >
        <BsPlusLg color="white"></BsPlusLg>
        <p className="text-white font-bold">Add new note</p>
      </button>
    </main>
  );
};

export default AddNewNoteButton;
