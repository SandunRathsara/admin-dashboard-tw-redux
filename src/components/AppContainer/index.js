import React from 'react';
import Logo from '../Logo';
import LiveClock from '../LiveClock';
import {Outlet} from 'react-router-dom';
import Dropdown from '../Dropdown';

function AppContainer() {
  const name = 'Sandun Rathsara';

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-800 px-6 py-2 text-white">
        <Logo />
        <div className="flex items-center">
          <LiveClock />
          <img className="mx-2" src={`https://avatars.dicebear.com/api/micah/${name}.svg?radius=50&size=30&backgroundColor=white&scale=80`} alt={'avatar'} />
          <Dropdown title={name}>
            <Dropdown.Item name={'Logout'} onClick={() => {}} />
          </Dropdown>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default AppContainer;
