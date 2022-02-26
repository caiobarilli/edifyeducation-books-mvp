import React from 'react';
import TopFooterMenuItem from '@/Shared/Footer/TopFooterMenuItem';

export default ({ items }) => {
  return (
    <ul className="font-Open-sans table mx-auto">
      {items.map(item => (
        <li key={item.text} className="mb-4">
          <TopFooterMenuItem
            className={
              item === items[0]
                ? 'font-bold text-black hover:text-gray-600'
                : 'text-black hover:text-gray-600'
            }
            text={item.text}
            link={item.link}
          />
        </li>
      ))}
    </ul>
  );
};
