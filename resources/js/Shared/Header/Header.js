import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Icon from '@/Shared/UI/Icon';
import MainMenu from '@/Shared/Header/MainMenu';

export default () => {
  const { auth } = usePage().props;
  const [menuOpened, setMenuOpened] = useState(false);
  const show_component = auth.user.role === 'owner';

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between w-full font-OpenSans">
        <MainMenu />

        <div className="relative">
          <div
            className="flex items-center cursor-pointer select-none group"
            onClick={() => setMenuOpened(true)}
          >
            {!auth.user.photo ? (
              <img
                className="block w-8 h-8 mr-2 border-2 rounded-full"
                src="/img/profile.jpg"
              />
            ) : (
              <img
                className="block w-8 h-8 mr-2 border-2 rounded-full"
                src={auth.user.photo}
              />
            )}

            <Icon name="cheveron-down" />
          </div>

          <div className={menuOpened ? '' : 'hidden'}>
            <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl">
              <InertiaLink
                href={route('users.edit', auth.user.id)}
                className="block px-6 py-2 hover:bg-orange-100 hover:text-white"
                onClick={() => setMenuOpened(false)}
              >
                Perfil
              </InertiaLink>

              {show_component && (
                <InertiaLink
                  href={route('users')}
                  className="block px-6 py-2 hover:bg-orange-100 hover:text-white"
                  onClick={() => setMenuOpened(false)}
                >
                  Usuários
                </InertiaLink>
              )}

              <InertiaLink
                as="button"
                href={route('logout')}
                className="block w-full px-6 py-2 text-left focus:outline-none hover:bg-orange-100 hover:text-white"
                method="post"
              >
                Sair
              </InertiaLink>
            </div>
            <div
              onClick={() => {
                setMenuOpened(false);
              }}
              className="fixed inset-0 z-10 bg-black opacity-25"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
