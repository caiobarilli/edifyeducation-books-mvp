import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import MainMenuNav from '@/Shared/Header/MainMenuNav';
import Logo from '@/Shared/UI/Logo';

export default ({ className }) => {
  return (
    <div className="flex">
      <InertiaLink className="mt-3" href="/">
        <Logo width="164" height="32" />
      </InertiaLink>
      <MainMenuNav />
    </div>
  );
};
