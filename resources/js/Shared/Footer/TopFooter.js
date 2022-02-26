import React from 'react';
import Logo from '@/Shared/UI/Logo';
import { InertiaLink } from '@inertiajs/inertia-react';
import TopFooterMenu from '@/Shared/Footer/TopFooterMenu';
import TopFooterForm from '@/Shared/Footer/TopFooterForm';

export default () => {
  const SiteMenu = [
    {
      text: 'Reading.com',
      link: '#'
    },
    {
      text: 'Meus Livros',
      link: '#'
    },
    {
      text: 'Comunidade',
      link: '#'
    },
    {
      text: 'Novidades',
      link: '#'
    },
    {
      text: 'Aplicativos',
      link: '#'
    }
  ];

  const AboutMenu = [
    {
      text: 'Sobre nós',
      link: '#'
    },
    {
      text: 'Blog',
      link: '#'
    },
    {
      text: 'Nossa missão',
      link: '#'
    },
    {
      text: 'Contato',
      link: '#'
    },
    {
      text: 'Carreiras',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto pt-3">
      <div className="flex items-start justify-around">
        <div className="flex-none">
          <InertiaLink className="mt-1 mb-2" href="/">
            <Logo width="161" height="37" />
          </InertiaLink>
          <p className="font-Lato mt-3">
            Reading.com é um produto fictício para <br />
            ajudar no processo seletivo para o time <br />
            de Produto & Desenvolvimento da <br /> Hivecloud.
          </p>
        </div>
        <div className="flex">
          <TopFooterMenu items={SiteMenu} />
        </div>
        <div className="flex">
          <TopFooterMenu items={AboutMenu} />
        </div>
        <div className="flex">
          <TopFooterForm />
        </div>
      </div>
    </div>
  );
};
