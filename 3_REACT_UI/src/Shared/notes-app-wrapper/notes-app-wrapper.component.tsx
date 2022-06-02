const NotesAppWrapper = (props) => {
  // chilidren on sama ku ng-content
  return (
    <main className='flex items-center justify-center'>
      <section className='w-[95%]'>{props.children}</section>
    </main>
  );
};

export default NotesAppWrapper;
