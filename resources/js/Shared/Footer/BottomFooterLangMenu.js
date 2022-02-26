import React from 'react';
import Icon from '@/Shared/UI/Icon';

export default ({ items }) => {
  return (
    <ul>
      <li className="font-OpenSans font-semibold text-sm">
        PT
        <Icon name="cheveron-up" className="inline ml-2" />
      </li>
    </ul>
  );
};
