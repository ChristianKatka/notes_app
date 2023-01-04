import { BsSearch, BsThreeDots } from 'react-icons/bs';

const TopUserInfoBar = ({userName}) => {
  return (
    <div className='flex justify-between'>
      <section className='flex items-center'>
        <img
          src='assets/images/elon_musk.png'
          alt='profile'
          className='object-cover rounded-full h-10 w-10'
        />
        <span className='ml-2 font-bold ssss'>{userName}</span>
      </section>
      <section className='flex items-center'>
        <BsSearch size='18' className='cursor-pointer'></BsSearch>
        <BsThreeDots size='18' className='ml-6 cursor-pointer'></BsThreeDots>
      </section>
    </div>
  );
};

export default TopUserInfoBar;
