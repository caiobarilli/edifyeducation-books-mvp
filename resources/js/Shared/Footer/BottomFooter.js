import React from 'react';
import BottomFooterMenu from '@/Shared/Footer/BottomFooterMenu';
import BottomFooterLangMenu from '@/Shared/Footer/BottomFooterLangMenu';

export default () => {
  const footerMenu = [
    {
      text: 'Política de privacidade',
      link: '#'
    },
    {
      text: 'Termos de uso',
      link: '#'
    },
    {
      text: 'Segurança',
      link: '#'
    },
    {
      text: 'Legal',
      link: '#'
    },
    {
      text: 'Site map',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-stretch font-OpenSans">
        <div className="basis-1/6 self-end">
          <p className="text-xs text-gray-500">
            Copyright © 2022 Reading All rights reserved
          </p>
        </div>
        <div className="basis-2/6 self-end">
          <BottomFooterMenu items={footerMenu} />
        </div>
        <div className="self-end ml-auto">
          <BottomFooterLangMenu />
        </div>
      </div>
    </div>
  );
};
