import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <main
      className='fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg'
    >
      <SideBarIcon icon={<FaFire size='28' />} text={'moro'} />
      <SideBarIcon icon={<BsPlus size='32' />} />
      <SideBarIcon icon={<BsFillLightningFill size='20' />} />
      <SideBarIcon icon={<FaPoo size='20' />} />
      <SideBarIcon icon={<BsGearFill size='22' />} />
    </main>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  // group (get access to parent. change on hover)
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
);

export default SideBar;
