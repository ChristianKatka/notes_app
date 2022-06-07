import { BsPlusLg } from 'react-icons/bs';
import './add-new-note.component.scss';

const AddNewNote = () => {
  return (
    <main className='flex fixed bottom-0 w-full text-center justify-center pt-16 custom-linear-gradient'>
      <section className='flex items-center gap-2 bg-gray-800 py-2 px-6 mb-5 rounded-md cursor-pointer'>
        <BsPlusLg color='white'></BsPlusLg>
        <p className='text-white font-bold'>Add new note</p>
      </section>
    </main>
  );
};

export default AddNewNote;
