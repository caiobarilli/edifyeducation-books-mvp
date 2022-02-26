import React from 'react';
import MainMenuNavItem from '@/Shared/Header/MainMenuNavItem';

export default () => {
  return (
    <nav className="ml-10">
      <ul className="h-full">
        <MainMenuNavItem title="Meus Livros" link="livros" />
      </ul>
    </nav>
  );
};
