import React from 'react';
import Helmet from 'react-helmet';
import FlashMessages from '@/Shared/Form/FlashMessages';
import Footer from '@/Shared/Footer/Footer';
import Header from '@/Shared/Header/Header';
import Hr from '@/Shared/UI/Hr';

export default function Layout({ title, children }) {
  return (
    <>
      <Helmet titleTemplate="%s | Reading.com" title={title} />
      <div className="flex flex-col h-screen">
        <div className="md:flex">
          <Header />
        </div>

        <div className="flex-grow">
          <Hr className="h-2 border-t-2" />
          <FlashMessages />
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
}
