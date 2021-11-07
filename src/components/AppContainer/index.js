import React from 'react';
import {string} from 'prop-types';
import Logo from '../Logo';
import LiveClock from '../LiveClock';
import {createAvatar} from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import {Outlet} from 'react-router-dom';

function AppContainer({name}) {
  const avatar = createAvatar(style, {
    seed: 'seed',
    dataUri: true,
    size: 30,
    backgroundColor: 'gold',
    radius: 50,
    mouth: 'teethSmile',
    scale: 90,
  });

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-800 px-6 py-4 text-white">
        <Logo />
        <div className="flex items-center">
          <LiveClock />
          <img src={avatar} alt={'avatar'} className="mx-2" />
          <p>{name}</p>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

AppContainer.propTypes = {
  name: string,
};

export default AppContainer;
