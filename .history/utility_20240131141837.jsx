import { BiSolidDashboard } from 'react-icons/bi';
import { TbShoe } from 'react-icons/tb';
import { TbShoeOff } from 'react-icons/tb';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { TbProgress } from 'react-icons/tb';
import { FiActivity } from 'react-icons/fi';
export const sidbarItem = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/sidbar',
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
export const products = [
  {
    id: 1,
    name: 'product 1',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'product 2',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'product 3',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'product 4',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'product 5',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'product 6',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const UnHideProducts = [
  {
    id: 1,
    name: 'product 1',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'product 2',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'product 3',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'product 4',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'product 5',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'product 6',
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const total = [
  {
    id: 1,
    name: 'total user',
    icon: <FaRegUser />,
    number: 20,
  },
  {
    id: 2,
    name: 'total Activity',
    icon: <FiActivity />,
    number: 20,
  },
  {
    id: 3,
    name: 'total Product',
    icon: <TbShoe className="w-10 h-10" />,
    number: 20,
  },
  {
    id: 4,
    name: 'total order',
    icon: <TbProgress />,
    number: 20,
  },
];
