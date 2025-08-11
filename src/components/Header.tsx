import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full text-center p-4">
      <h1 className="text-2xl font-serif font-bold text-warm-brown">
        {t('app_title')}
      </h1>
    </header>
  );
};

export default Header;