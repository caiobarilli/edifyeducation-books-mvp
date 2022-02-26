import React from 'react';
import BottomFooterMenuItem from '@/Shared/Footer/BottomFooterMenuItem';

export default ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.text} className="inline ">
          <BottomFooterMenuItem
            className={
              item === items[0]
                ? 'px-2 text-gray-600 text-xs'
                : 'px-2 text-gray-600 border-l-2 text-xs'
            }
            text={item.text}
            link={item.link}
          />
        </li>
      ))}
    </ul>
  );
};
