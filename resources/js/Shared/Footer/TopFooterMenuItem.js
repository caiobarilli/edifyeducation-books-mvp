import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default ({ link, text, className }) => {
  return (
    <InertiaLink className={className} href={link}>
      {text}
    </InertiaLink>
  );
};
