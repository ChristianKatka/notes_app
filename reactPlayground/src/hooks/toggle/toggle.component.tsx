import UseToggle from './useToggle.hook';

const ToggleComponent = (props) => {
  const [value, toggleValue] = UseToggle(false);

  return (
    <main>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
    </main>
  );
};

export default ToggleComponent;
