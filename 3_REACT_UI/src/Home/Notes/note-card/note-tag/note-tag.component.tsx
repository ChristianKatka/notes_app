const NoteTag = (props) => {
  return (
    <main className='flex gap-1'>
      {props.tags.map((tag) => (
        <p
          key={tag}
          className='bg-gray-300 text-gray-500 font-bold text-xs rounded-sm inline-block px-2'
        >
          {tag}
        </p>
      ))}
    </main>
  );
};

export default NoteTag;
