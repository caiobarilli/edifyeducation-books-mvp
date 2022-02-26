import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/UI/Icon';

export default ({ title, link }) => {
  return (
    <li className="border-t-4 py-2">
      <Icon name="border_menu" className="absolute -top-1" />
      <InertiaLink
        href={route(link)}
        className="font-OpenSans text-base text-blue-100 hover:text-blue-600 text-center"
      >
        {title}
      </InertiaLink>
    </li>
  );
};
