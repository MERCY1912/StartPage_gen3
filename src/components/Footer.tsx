import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full text-center p-4 mt-8">
      <p className="text-sm text-warm-brown/70">
        {t('footer_text')}
      </p>
    </footer>
  );
};

export default Footer;