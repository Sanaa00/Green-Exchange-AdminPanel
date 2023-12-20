import { BiSolidDashboard } from 'react-icons/bi';
import { TbShoe } from 'react-icons/tb';
import { TbShoeOff } from 'react-icons/tb';
import { IoSettingsSharp } from 'react-icons/io5';
export const sidbarItem = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/',
    icon: <BiSolidDashboard className="w-6 h-6" />,
  },
  {
    id: 2,
    name: 'Products',
    url: 'products',
    icon: <TbShoe className="w-6 h-6" />,
  },
  {
    id: 3,
    name: 'Hide Products',
    url: 'hide',
    icon: <TbShoeOff className="w-6 h-6" />,
  },
  {
    id: 4,
    name: 'Setting',
    url: 'setting',
    icon: <IoSettingsSharp className="w-6 h-6" />,
  },
];
