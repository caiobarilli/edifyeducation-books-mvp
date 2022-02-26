import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/UI/Icon';

export default () => (
  <ul className="flex items-center mb-2">
    <li className="pr-2 py-2">
      <InertiaLink
        href={route('dashboard')}
        className="flex items-center text-black hover:text-gray-600"
      >
        <Icon name="home" />
      </InertiaLink>
    </li>
    <li className="pr-2 py-2">
      <div className="flex items-center ">
        <Icon
          name="cheveron-right"
          className="mr-2 text-black hover:text-gray-600"
        />
        <InertiaLink href={route('livros')}>Meus livros</InertiaLink>
      </div>
    </li>
    <li className="pr-2 py-2">
      <div className="flex items-center">
        <Icon name="cheveron-right" className="mr-2" />
        Adicionar livro
      </div>
    </li>
  </ul>
);
