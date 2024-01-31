import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { sidbarItem } from '../../utility';
import Logo from './Logo';
import PrimaryButton from './PrimaryButton';
import { IoLogOut } from 'react-icons/io5';
import { useEffect } from 'react';
function Sidbar() {
  const logout = () => {
    console.log('logout', localStorage.getItem('admin') === null);
    localStorage.setItem('admin', null);
  };
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('admin')) === null
      // JSON.parse(localStorage.getItem('admin')) === undefined
    )
      <Navigate to="/" replace />;
  }, []);
  return (
    <div className="grid text-gray-800  ">
      <div className="flex justify-between flex-col w-1/6 h-screen fixed shadow-sm  rounded-br rounded-tr border-r">
        <div className="flex flex-col ">
          <Logo />
          <div className="">
            {sidbarItem.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    (isActive
                      ? 'bg-green  text-neutral-100 rounded-sm'
                      : 'text-gray-800') +
                    'w-full flex items-center py-4 px-8 rounded-sm mx-2 '
                  }
                >
                  <span>{item.icon}</span>
                  <span className="pl-2 font-semibold">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex px-8 my-5">
          {' '}
          <PrimaryButton
            text={'logout'}
            onClick={logout}
            // color="green"
            widthbutton={100}
            icon={<IoLogOut className="w-6 h-6" />}
          />
        </div>
      </div>
      <div className=" w-full pl-72">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidbar;
