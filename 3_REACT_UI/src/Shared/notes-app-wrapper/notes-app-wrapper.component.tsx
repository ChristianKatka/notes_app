const NotesAppWrapper = (props) => {
  // chilidren on sama ku ng-content
  return (
    <main className='flex items-center justify-center'>
      <section className='w-11/12'>{props.children}</section>
    </main>
  );
};

export default NotesAppWrapper;
