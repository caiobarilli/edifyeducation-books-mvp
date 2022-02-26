import React from 'react';
import TopFooter from '@/Shared/Footer/TopFooter';
import BottomFooter from '@/Shared/Footer/BottomFooter';

export default () => {
  return (
    <div className="container mx-auto py-2">
      <hr className="h-2 border-t-2" />
      <TopFooter />
      <hr className="h-2 border-t-2" />
      <BottomFooter />
    </div>
  );
};
