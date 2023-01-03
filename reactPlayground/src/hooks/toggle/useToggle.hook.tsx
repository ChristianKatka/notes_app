import { useState } from 'react';

const UseToggle = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = () => {
    setValue((currentValue: any) => !currentValue);
  };

  return [value, toggleValue];
};

export default UseToggle;
