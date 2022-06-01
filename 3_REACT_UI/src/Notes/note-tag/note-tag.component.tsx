const NoteTag = (props) => {
  return (
    <span className='bg-gray-200 rounded-sm inline-block px-3 py-1'>
      {props.text}
    </span>
  );
};

export default NoteTag;
