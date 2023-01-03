import { BsCheckCircle, BsCircle } from 'react-icons/bs';

const NotecheckBoxItem = ({ checkBoxItem }) => {
  return (
    <section className='flex items-center gap-2'>
      {checkBoxItem.checked && <BsCircle></BsCircle>}
      {!checkBoxItem.checked && <BsCheckCircle></BsCheckCircle>}
      <p>{checkBoxItem.text}</p>
    </section>
  );
};

export default NotecheckBoxItem;
